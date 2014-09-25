title: Hello World to XSLT
date: 2014-09-25 13:35:34
tags:
 - XSLT
 - XML
---
### Definition
XSL stands for EXtensible Stylesheet Language, and is a style sheet language for XML documents. (XSL = Style Sheets for XML)
XSLT stands for XSL Transformations. In this tutorial you will learn how to use XSLT to transform XML documents into other formats, like XHTML.

You can try a online demo here: http://www.w3schools.com/xsl/tryxslt.asp?xmlfile=cdcatalog&xsltfile=cdcatalog 
<!-- more -->
### A simple Sample in Java
The XML file(I already add line: <?xml-stylesheet type="text/xsl" href="helloWorld.xslt" ?>, you can put helloWorld.xml and helloWorld.xslt in the same folder, then open helloWorld.xml in IE[Note: I hate IE, but in this case, IE is better than Chrome])
```
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="helloWorld.xslt" ?>
<!-- New document created with EditiX at Thu Sep 25 09:36:11 EDT 2014 -->
<catalog>
	<cd>
		<title>Empire Burlesque</title>
		<artist>Bob Dylan</artist>
		<country>USA</country>
		<company>Columbia</company>
		<price>10.90</price>
		<year>1985</year>
	</cd>
	<cd>
		<title>Hide your heart</title>
		<artist>Bonnie Tyler</artist>
		<country>UK</country>
		<company>CBS Records</company>
		<price>9.90</price>
		<year>1988</year>
	</cd>
	<cd>
		<title>Greatest Hits</title>
		<artist>Dolly Parton</artist>
		<country>USA</country>
		<company>RCA</company>
		<price>9.90</price>
		<year>1982</year>
	</cd>
	<cd>
		<title>Still got the blues</title>
		<artist>Gary Moore</artist>
		<country>UK</country>
		<company>Virgin records</company>
		<price>10.20</price>
		<year>1990</year>
	</cd>
	<cd>
		<title>Eros</title>
		<artist>Eros Ramazzotti</artist>
		<country>EU</country>
		<company>BMG</company>
		<price>9.90</price>
		<year>1997</year>
	</cd>
	<cd>
		<title>One night only</title>
		<artist>Bee Gees</artist>
		<country>UK</country>
		<company>Polydor</company>
		<price>10.90</price>
		<year>1998</year>
	</cd>
	<cd>
		<title>Sylvias Mother</title>
		<artist>Dr.Hook</artist>
		<country>UK</country>
		<company>CBS</company>
		<price>8.10</price>
		<year>1973</year>
	</cd>
	<cd>
		<title>Maggie May</title>
		<artist>Rod Stewart</artist>
		<country>UK</country>
		<company>Pickwick</company>
		<price>8.50</price>
		<year>1990</year>
	</cd>
	<cd>
		<title>Romanza</title>
		<artist>Andrea Bocelli</artist>
		<country>EU</country>
		<company>Polydor</company>
		<price>10.80</price>
		<year>1996</year>
	</cd>
	<cd>
		<title>When a man loves a woman</title>
		<artist>Percy Sledge</artist>
		<country>USA</country>
		<company>Atlantic</company>
		<price>8.70</price>
		<year>1987</year>
	</cd>
	<cd>
		<title>Black angel</title>
		<artist>Savage Rose</artist>
		<country>EU</country>
		<company>Mega</company>
		<price>10.90</price>
		<year>1995</year>
	</cd>
	<cd>
		<title>1999 Grammy Nominees</title>
		<artist>Many</artist>
		<country>USA</country>
		<company>Grammy</company>
		<price>10.20</price>
		<year>1999</year>
	</cd>
	<cd>
		<title>For the good times</title>
		<artist>Kenny Rogers</artist>
		<country>UK</country>
		<company>Mucik Master</company>
		<price>8.70</price>
		<year>1995</year>
	</cd>
	<cd>
		<title>Big Willie style</title>
		<artist>Will Smith</artist>
		<country>USA</country>
		<company>Columbia</company>
		<price>9.90</price>
		<year>1997</year>
	</cd>
	<cd>
		<title>Tupelo Honey</title>
		<artist>Van Morrison</artist>
		<country>UK</country>
		<company>Polydor</company>
		<price>8.20</price>
		<year>1971</year>
	</cd>
	<cd>
		<title>Soulsville</title>
		<artist>Jorn Hoel</artist>
		<country>Norway</country>
		<company>WEA</company>
		<price>7.90</price>
		<year>1996</year>
	</cd>
	<cd>
		<title>The very best of</title>
		<artist>Cat Stevens</artist>
		<country>UK</country>
		<company>Island</company>
		<price>8.90</price>
		<year>1990</year>
	</cd>
	<cd>
		<title>Stop</title>
		<artist>Sam Brown</artist>
		<country>UK</country>
		<company>A and M</company>
		<price>8.90</price>
		<year>1988</year>
	</cd>
	<cd>
		<title>Bridge of Spies</title>
		<artist>T`Pau</artist>
		<country>UK</country>
		<company>Siren</company>
		<price>7.90</price>
		<year>1987</year>
	</cd>
	<cd>
		<title>Private Dancer</title>
		<artist>Tina Turner</artist>
		<country>UK</country>
		<company>Capitol</company>
		<price>8.90</price>
		<year>1983</year>
	</cd>
	<cd>
		<title>Midt om natten</title>
		<artist>Kim Larsen</artist>
		<country>EU</country>
		<company>Medley</company>
		<price>7.80</price>
		<year>1983</year>
	</cd>
	<cd>
		<title>Pavarotti Gala Concert</title>
		<artist>Luciano Pavarotti</artist>
		<country>UK</country>
		<company>DECCA</company>
		<price>9.90</price>
		<year>1991</year>
	</cd>
	<cd>
		<title>The dock of the bay</title>
		<artist>Otis Redding</artist>
		<country>USA</country>
		<company>Atlantic</company>
		<price>7.90</price>
		<year>1987</year>
	</cd>
	<cd>
		<title>Picture book</title>
		<artist>Simply Red</artist>
		<country>EU</country>
		<company>Elektra</company>
		<price>7.20</price>
		<year>1985</year>
	</cd>
	<cd>
		<title>Red</title>
		<artist>The Communards</artist>
		<country>UK</country>
		<company>London</company>
		<price>7.80</price>
		<year>1987</year>
	</cd>
	<cd>
		<title>Unchain my heart</title>
		<artist>Joe Cocker</artist>
		<country>USA</country>
		<company>EMI</company>
		<price>8.20</price>
		<year>1987</year>
	</cd>
</catalog>
```

### What I will do is to generate a new XML with XSLT, which will be:
1. In format as below:
```
<cd>
<title year="1971">Tupelo Honey</title>
<artist>Van Morrison</artist>
<country>UK</country>
</cd>
```
2. All records will be sorted by year ASC.

### To save you time, I put the XSLT file content as below:
```
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="xml" indent="yes"/>
<xsl:template match="/">
  <cds>
      <xsl:for-each select="catalog/cd">
      <xsl:sort select="year" />
      <cd>
        <title year="{year}"><xsl:value-of select="title"/></title>
        <artist><xsl:value-of select="artist"/></artist>
        <country><xsl:value-of select="country"/></country>
      </cd>
      </xsl:for-each>
  </cds>
</xsl:template>
</xsl:stylesheet>
```

### Finally, a simple Java code piece, which can convert XML to XML based on XSLT:

```
package me.hzhou.code.xslt;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
/**
 * Generate output xml based on provided XSLT and Input XML files
 * http://stackoverflow.com/questions/4604497/xslt-processing-with-java
 * 
 * @author hzhou
 * @param  XSLT
 * @param  Input XML
 * @param  Output
 */
public class XSLT {
	
	public static void TransXML2XML(File xslt, File input, File output) throws IOException, URISyntaxException, TransformerException {
		
        TransformerFactory factory = TransformerFactory.newInstance();
        Source xsltSrc = new StreamSource(xslt);
        Transformer transformer = factory.newTransformer(xsltSrc);
        Source text = new StreamSource(input);
        transformer.transform(text, new StreamResult(output));
    }
}
```
