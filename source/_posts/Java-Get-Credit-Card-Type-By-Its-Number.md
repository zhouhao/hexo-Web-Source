title: "Java: Get Credit Card Type By Its Number"
date: 2014-08-13 14:03:54
tags:
 - Java
 - Regular Expression
---
It is a simple function that can identify the credit card type by its number.	
Get help from this page: http://www.regular-expressions.info/creditcard.html

<!-- more -->

```
public class Util {
	
	public static String getCreditCardTypeByNumber(String creditCardNumber) {
		
		String regVisa = "^4[0-9]{12}(?:[0-9]{3})?$";
		String regMaster = "^5[1-5][0-9]{14}$";
		String regExpress = "^3[47][0-9]{13}$";
		String regDiners = "^3(?:0[0-5]|[68][0-9])[0-9]{11}$";
		String regDiscover = "^6(?:011|5[0-9]{2})[0-9]{12}$";
		String regJCB= "^(?:2131|1800|35\\d{3})\\d{11}$";


		if(creditCardNumber.matches(regVisa))
			return "visa";
		if (creditCardNumber.matches(regMaster))
			return "mastercard";
		if (creditCardNumber.matches(regExpress))
			return "amex";
		if (creditCardNumber.matches(regDiners))
			return "DINERS";
		if (creditCardNumber.matches(regDiscover))
			return "discover";
		if (creditCardNumber.matches(regJCB))
			return "jcb";
		return "invalid";
	}
}
```