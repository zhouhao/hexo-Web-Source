title: "A simple workaround for \"Cannot find a (Map) Key deserializer\""
date: 2017-08-23 19:15:56
tags:
 - Jackson
 - Json
 - deserialize
categories:
  - 计算机那些事
  - Java
---
```
Exception in thread "main" com.fasterxml.jackson.databind.exc.InvalidDefinitionException: 
Cannot find a (Map) Key deserializer for type [simple type, class XXXX]
```
<!-- more -->

### How to reproduce
```java
// assume there are many teams of students in a class, and each group has a team leader

public class Student {
    private String name;
    private Integer age;
    
    // getter, setter, hashcode, equals and toString 
}

public class Class {
    private Map<Student, List<Student>> teamMap;
    
    // getter and setter
}

// Test Code
    public static void main(String[] args) throws IOException {
        Class c = new Class();

        Student leader = new Student();
        leader.setAge(20);
        leader.setName("Salty Egg");

        Student s = new Student();
        s.setAge(20);
        s.setName("Sweet Egg");
        Map<Student, List<Student>> map = new HashMap<>();
        List<Student> list = new ArrayList<>();
        list.add(s);
        map.put(leader, list);
        c.setTeamMap(map);


        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(c);
        System.out.println(json); // this line can be printed

        Class _c = mapper.readValue(json, Class.class);
        System.out.println(_c.getTeamMap());
    }

```
For serialization, there will not be any problem, and we can have the print-out
```json
{"teamMap":{"Student{name='Salty Egg', age=20}":[{"name":"Sweet Egg","age":20}]}}
```
We can find that when serializing the map key, `Jackson` will call `toString()` method by default.

### How to `fix` this
The standard solution is to write the `key serialize/deserialize` for `Jackson`, what if I do not wanna it as this?!

###### Another workaround

```java
public class KeyValueContainer<K, V> {
    private K key;
    private V value;

    public KeyValueContainer(){} // this is required by Jackson
    public KeyValueContainer(K key, V value) {
        this.key = key;
        this.value = value;
    }
    // getter and setter
}

public class ObjectUtils {
    public static <K, V> List<Class.KeyValueContainer<K, V>> toList(Map<K, V> map) {
        if (map == null || map.isEmpty()) {
            return new ArrayList<>();
        }
        return map.entrySet().stream()
                .map(e -> new Class.KeyValueContainer<>(e.getKey(), e.getValue()))
                .collect(Collectors.toList());
    }

    public static <K, V> Map<K, V> toMap(List<Class.KeyValueContainer<K, V>> list) {
        if (list == null || list.isEmpty()) {
            return new HashMap<>();
        }
        return list.stream()
                .collect(Collectors.toMap(Class.KeyValueContainer::getKey, Class.KeyValueContainer::getValue));
    }
}

// updated Class class
public class Class {
    @JsonIgnore
    private Map<Student, List<Student>> teamMap;

    // getter and setter

    @JsonProperty("team")
    private List<KeyValueContainer<Student, List<Student>>> getTeamList() {
        return ObjectUtils.toList(teamMap);
    }

    @JsonProperty("team")
    private void setTeamList(List<KeyValueContainer<Student, List<Student>>> list) {
        teamMap = ObjectUtils.toMap(list);
    }
}    
```

Then, with the same test case above, we can have the following result:
```
{"team":[{"key":{"name":"Salty Egg","age":20},"value":[{"name":"Sweet Egg","age":20}]}]}
{Student{name='Salty Egg', age=20}=[Student{name='Sweet Egg', age=20}]}
```

**Note:**
1. We can have new `getter & setter` as `private`, the third-party developers will not call it with mistakes
2. Each time, when do serialization, it will create new `List`, which may bring a bit performance issue.
