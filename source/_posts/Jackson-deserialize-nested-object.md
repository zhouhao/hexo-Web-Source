title: "Jackson: deserialize nested object"
date: 2015-04-23 17:30:58
tags:
 - Jackson
 - Json
 - deserialize
---
I am implementing a RESTful server inside my company. The workflow is very straight-forward: `request` and `response`. However, nothing is easy, the RESTful service is based on an existed project, which handles database operations, and the entities inside that project is pretty complex(a lot of interfaces and abstract classes). 
<!-- more -->

### Take this as a demo:
![Class diagram](/img/json/structure.png "Class diagram")    
In class `Zoo`, there is a set of `IAnimal`. The when I tried to deserialize `{"animals":[{"name":"1"},{"name":"2"}]}` into `Zoo` instance, it will will have such error as below: 


```java
com.fasterxml.jackson.databind.JsonMappingException: Can not construct instance of com.oshackers.quickstart.jackson.model.IAnimal, problem: abstract types either need to be mapped to concrete types, have custom deserializer, or be instantiated with additional type information
 at [Source: {"animals":[{"name":"1"},{"name":"2"}]}; line: 1, column: 13] (through reference chain: com.oshackers.quickstart.jackson.model.Zoo["animals"]->java.util.HashSet[0])
	at com.fasterxml.jackson.databind.JsonMappingException.from(JsonMappingException.java:148)
	at com.fasterxml.jackson.databind.DeserializationContext.instantiationException(DeserializationContext.java:857)
	at com.fasterxml.jackson.databind.deser.AbstractDeserializer.deserialize(AbstractDeserializer.java:139)
	at com.fasterxml.jackson.databind.deser.std.CollectionDeserializer.deserialize(CollectionDeserializer.java:245)
```

The error message is very clear. 
(Note: For Jackson version 1.x, you may have other error, as `find object as LinkedHashMap, cannot cast to SomeClass`.)

### Solution 1 (wrapper our own Deserializer):


```java
public class AnimalDeserializer extends JsonDeserializer<Set<IAnimal>> {

	@Override
	public Set<IAnimal> deserialize(JsonParser jsonParser, DeserializationContext ctxt) throws IOException {
		Set<IAnimal> result = new HashSet<>();
		ObjectCodec oc = jsonParser.getCodec();

		JsonNode node = oc.readTree(jsonParser);

		ObjectMapper mapper = new ObjectMapper();
		for (JsonNode n : node) {
			result.add(mapper.treeToValue(n, Animal.class));
		}
		return result;
	}
}
```

Then inside `IZoo`:


```java
	@JsonDeserialize(using = AnimalDeserializer.class)
	void setAnimals(Set<IAnimal> animals);
```


### Solution 2 (Use Jackson Annotation)
Modify `IAnimal` as


```java
@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS, include = JsonTypeInfo.As.PROPERTY, property = "@class")
public interface IAnimal {

	String getName();

	void setName(String name);
}
```


### What are the differences between these two solutions?
Solution 1 will not bring side-effect to `Serialization`, which means if a zoo instance is serialized, we will get the json like: 


```json
{
    "animals": [
        {
            "name": "1"
        },
        {
            "name": "2"
        }
    ]
}
```


While solution 2, for the same zoo instance, it will print json string as 


```json
{
    "animals": [
        {
            "@class": "com.oshackers.quickstart.jackson.model.Animal",
            "name": "1"
        },
        {
            "@class": "com.oshackers.quickstart.jackson.model.Animal",
            "name": "2"
        }
    ]
}
```


### Now, I believe you know how solution 2 work. Have fun!


Find the demo code here: 
https://github.com/zhouhao/Jackson-Quick-Start/tree/master/src/main/java/com/oshackers/quickstart/jackson