# 13th October 2015 Morning Challenge

From Benji Lees

```
var obj = {
    frank: {
        lastName: 'len'
    },
    jane: {
        lastName: 'diren'
    },
    dave: {
        lastName: 'bolt'
    },
    sarah: {
        lastName: 'can'
    },
    karl: {
        lastName: 'daves'
    },
    jim: {
       lastName: 'dan'
   }
}
```

Here is an object of people where the names of each person is a _property_ which is assigned an _object_ containing the persons last name. Create a new object which only contains people with a last name that starts with the letter d. The object should be structured the same as the object above.  

Conditions:  
1) This must be done using method chaining  
2) No ```for``` or ```while``` loops can be used  
3) Your method must return a new object and not alter the original object  

Clues: Object.keys(), reduce(), filter()
