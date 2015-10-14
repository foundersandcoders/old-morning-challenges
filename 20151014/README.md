# 14th October Morning Challenge

From Benji Lees

## JQuery Selector

### Step 1
Create a function ```var $ = function (string) {.........}``` that takes a string which represents a selector i.e a class, id or a tag.  

Your function should calculate whether the string is a class ```$('.class')```, id ```$('#id')``` or tag ```$('tag')``` by the string's first character.  

If the string represents an id, return the _element_ that contains that id. But if it is a _class_ or _tag_ just return the __first__ element that contains that class or is that tag.

### Step 2
Add two methods to the returned element ```addClass``` and ```removeClass```. The ```addClass``` method adds a class:

> ```$('.class').addClass('show')```

...whilst the ```removeClass``` method removes a class:

> ```$('.class').removeClass('hide')```

Each of these methods returns the same element with the same methods attached so we can method chain:

>```$('.class').addClass('show').removeClass('hide')```
