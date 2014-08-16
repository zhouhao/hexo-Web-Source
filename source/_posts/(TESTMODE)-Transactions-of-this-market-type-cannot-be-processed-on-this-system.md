title: (TESTMODE) Transactions of this market type cannot be processed on this system
date: 2014-08-11 11:20:18
tags:
 - Authorize.net
 - Payment
---
Today, I am playing Authorize.net API for Java, and as a beginner, I encountered many questions.
###One is: 

```
(TESTMODE) Transactions of this market type cannot be processed on this system
```
<!-- more -->

I searched Google a lot, then I find "one" potential solution for [StackOverflow](http://stackoverflow.com/questions/8355003/transaction-of-this-market-type-cannot-be-processed-on-this-system)

1. Go to the registration page: https://developer.authorize.net/sandbox/
2. Please select your **Account Type** as `Card Not Present`.
![Account Type](/img/payment/account_type.png "Account Type")    

Now, use the new apiLoginId and transactionKey, you can pass the test successfully.

![Transaction List](/img/payment/transaction.png "Transaction List")    