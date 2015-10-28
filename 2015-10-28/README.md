# 28th October Morning Challenge

From Rafe Kennedy

## Writing recursive functions

Complete these functions without using for loops, and array methods that remove single elements like ```pop``` etc.

**Use recursion**

```
function map (mapping, array) {
  // TODO
}

function filter (predicate, array) {
  // TODO
}

function reduce (reducer, initialVal, array) {
  // TODO
}

var theExampleArray = [1, 2, 3, 4, 5];

console.log(map(double, theExampleArray), [2, 4, 6, 8, 10], 'previous two strings should be the same');

console.log(filter(greaterThan3, theExampleArray), [4, 5], 'previous two strings should be the same');

console.log(reduce(sum, 0, theExampleArray), 15, 'previous two strings should be the same');

function double (n) { return n * 2; }

function greaterThan3 (n) { return n > 3; }

function sum (m, n) { return m + n; }
```
