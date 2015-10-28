function map (mapping, array) {
  if (!array.length) return [];
  return [mapping(array[0])].concat(map(mapping, array.slice(1)));
}

function filter (predicate, array) {
  if (!array.length) return [];
  return (predicate(array[0]) ? [array[0]] : []).concat(filter(predicate, array.slice(1)));
}

function reduce (reducer, initialVal, array) {
  if (!array.length) return initialVal;
  return reduce(reducer, reducer(initialVal, array[0]), array.slice(1));
}

var theExampleArray = [1, 2, 3, 4, 5];

console.log(map(double, theExampleArray), [2, 4, 6, 8, 10], 'previous two strings should be the same');

console.log(filter(greaterThan3, theExampleArray), [4, 5], 'previous two strings should be the same');

console.log(reduce(sum, 0, theExampleArray), 15, 'previous two strings should be the same');

function double (n) { return n * 2; }

function greaterThan3 (n) { return n > 3; }

function sum (m, n) { return m + n; }
