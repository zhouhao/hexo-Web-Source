title: 'Quick start: swagger, spring-boot and Jersey'
date: 2017-02-13 13:56:40
tags:
 - Java
 - Swagger
 - Spring Boot
 - Jersey
categories:
 - 计算机那些事
 - 服务
---
在做服务器端API开发的时候，如何保持文档的更新是一个比较头疼的问题。试过写成word文档，缺点很明显：
1. 更新不及时
2. 不便于查阅

也试过用其他的在线API管理工具，太懒了，总是无法保持更新。而且大多数服务还是收费的。  
<!-- more -->

最近一次，我在试用[EOApi](https://www.eolinker.com/)，终于被它的访问速度打败了（貌似这个对path parameter支持的也不是很好），我不得不寻找新的工具。

至于为什么最后会选择Swagger，我已经记不清了。其实对于Swagger我一直是有耳闻的，只是一开始我玩弄Swagger Editor的时候，我以为它只能从YAML/JSON生成Java代码的呢。没想到居然反着也行。

长话短说，在此就简单介绍一下如果做Swagger， Spring-Boot和Jersey的快速集成。
（其实我是根据这个链接来学习的: [点我](http://tech.asimio.net/2016/04/05/Microservices-using-Spring-Boot-Jersey-Swagger-and-Docker.html)）

### 1. 建一个`Spring-Boot`的项目，添加必要的依赖
```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jersey</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>io.swagger</groupId>
            <artifactId>swagger-jersey2-jaxrs</artifactId>
            <version>${swagger.version}</version>
        </dependency>
```

### 2. 配置`Jersey`和`Swagger`
***Note:*** Swagger不和Jersey共用一个Jackson的`MapperObject`， 所以你如果要让你的Model/Entity显示为`SNAKE_CASE`，你需要加上

```java
io.swagger.util.Json.mapper().setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
```

但是这也会导致一个问题，如果你以`http://127.0.0.1:8080/swagger.json`来获取内容，你会发现那些`basePath`和`operationId`也变成了`SNAKE_CASE`,Swagger-UI会报错。
其实这个时候你只要换成`http://127.0.0.1:8080/swagger.yaml`一切就妥妥的了。

***Note:*** 在`Spring-boot`中，所有的Jesey的EndPoint必须一个个添加，不能直接`package(XXX)`之类的，`Spring-boot`官方文档有提到，我之前踩过这个坑。

```java
@Component
public class JerseyConfig extends ResourceConfig {

    @Value("${spring.jersey.application-path:/}")
    private String apiPath;

    public JerseyConfig() {
        this.registerEndpoints();
    }

    @PostConstruct
    public void init() {
        // Register components where DI is needed
        this.configureSwagger();
    }

    private void registerEndpoints() {
        this.register(HelloWorldResource.class);
        // Available at /<Jersey's servlet path>/application.wadl
        this.register(WadlResource.class);
    }

    private void configureSwagger() {
        // Available at localhost:port/swagger.json
        this.register(ApiListingResource.class);
        this.register(SwaggerSerializers.class);

        BeanConfig config = new BeanConfig();
        config.setConfigId("springboot-jersey-swagger-docker-example");
        config.setTitle("Spring Boot + Jersey + Swagger + Docker Example");
        config.setVersion("v1");
        config.setContact("Hao Zhou");
        config.setSchemes(new String[]{"http", "https"});
        config.setBasePath(this.apiPath);
        config.setResourcePackage("me.hzhou.resource");
        config.setPrettyPrint(true);
        config.setScan(true);

        // it does not work as below
        //config.getSwagger().setSecurityDefinitions(XX);

        // if you want to have you pojo parse as SNAKE_CASE, please add following line,
        // also in this case, you should use swagger.yaml, rather than swagger.json for output, as
        // some swagger keywords, such as operationId, will be parsed as operation_id. - syntax error
        //io.swagger.util.Json.mapper().setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
    }
}
```

### 3. 添加`HelloWorld resource`
***Note:*** `@SwaggerDefinition`这里面不是必要的，我加在这里只是为了提示Swagger有security方面的注解
```java
@Component
@Path("/")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)

@Api(value = "Hello resource", produces = "application/json")
@SwaggerDefinition(securityDefinition =
@SecurityDefinition(apiKeyAuthDefintions = {
        @ApiKeyAuthDefinition(key = "basic", name = "Authorization", in = ApiKeyAuthDefinition.ApiKeyLocation.HEADER)
}))
public class HelloWorldResource {
    private static final Logger LOGGER = LoggerFactory.getLogger(HelloWorldResource.class);

    @GET
    @Path("hello/{name}")
    @ApiOperation(
            value = "Get a hello resource."
            , response = Hello.class
            //,responseContainer = "List" // if returned is a list of objects
            //,authorizations = @Authorization(value = "basic")
    )
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "hello resource found"),
            @ApiResponse(code = 404, message = "Given admin user not found")
    })
    public Response getHelloVersionInUrl(@ApiParam @PathParam("name") String name) {
        if ("404".equals(name)) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        Hello result = new Hello();
        result.setMsg(String.format("Hello %s. %s", name, "welcome to swagger"));
        return Response.status(Response.Status.OK).entity(result).build();
    }
}
```

### 4. 最后借助`Swagger-UI`来显示我们的API文档

![Swagger UI](/img/swagger-ui-api.png)

### 5. 后续
其实我还没有整明白如果实现`http-header`的`basic authorization`。等我哪天知道了再过来更新。

### 6. 源码
[swagger-spring-boot-jersey](https://github.com/zhouhao/swagger-spring-boot-jersey)