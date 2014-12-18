title: How to get input file's name inside mapper
date: 2013-10-01 18:07:41
tags: 
  - Big Data
  - Hadoop
---
OK, I agree that processing large scale with Hadoop is cool, but sometimes, it makes me frustrated when I was doing my course project.
Often, in the task of Map-Reduce, we will use **join**, as the input for the whole job may be muti-files.  
<!-- more -->
###How to handle muti-files in one Mapper：

1. Multiple mappers: each mapper handles its own file: [Code Demo](https://github.com/zhouhao/Hadoop-Easy-MapReduce/blob/master/MapReduceQueries/Query3/query3.java)    

```java
MultipleInputs.addInputPath(conf, new Path(args[0]), TextInputFormat.class, CustomerMap.class);
MultipleInputs.addInputPath(conf, new Path(args[1]), TextInputFormat.class, TransactionMap.class);
FileOutputFormat.setOutputPath(conf, new Path(args[2]));    
```

2. Single mapper：one mapper handles all input files: [Code Demo](https://github.com/zhouhao/CS525-Big-Data-Course-Project/blob/master/Demo_getFileNameFromReporter/query1.java) (As following code, we can know the souce for the data inside the mapper, then take responding actions)      
    
```java
public static class Map extends MapReduceBase implements Mapper&lt;LongWritable, Text, Text, Text> {

	public void map(LongWritable key, Text value, OutputCollector&lt;Text,Text> output, Reporter reporter) throws IOException {
		//Get FileName from reporter
		FileSplit fileSplit = (FileSplit)reporter.getInputSplit();
		String filename = fileSplit.getPath().getName();

		//String line = value.toString();
		output.collect(new Text(filename),value);  			
	}
}
```

###PS: The input for mapper can be a folder：
```java
FileInputFormat.setInputPaths(conf, new Path("/tmp/"));
```