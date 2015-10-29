function map (mapping, array) {
  if (!array.length) return [];
  return appendList((map(mapping, slice(array, 1))), [mapping(array[0])]);
}

function filter (predicate, array) {
    if (!array.length) return [];
    var included = predicate(array[0]) ? [array[0]] : []
    return appendList((filter(predicate, slice(array, 1))), included);
}

function reduce (reducer, initialVal, array) {
    if (!array.length) return initialVal;
    return reduce(reducer, reducer(initialVal, array[0]), slice(array, 1))
}

var theExampleArray = [1, 2, 3, 4, 5];

console.log(map(double, theExampleArray), [2, 4, 6, 8, 10], 'previous two strings should be the same');

console.log(filter(greaterThan3, theExampleArray), [4, 5], 'previous two strings should be the same');

console.log(reduce(sum, 0, theExampleArray), 15, 'previous two strings should be the same');

function double (n) { return n * 2; }

function greaterThan3 (n) { return n > 3; }

function sum (m, n) { return m + n; }

function append (appendee, list) {
    if (!appendee) return list;
    var longList = listCopy(list);
    longList[longList.length] = appendee;
    return longList;
}

function appendList (listAppendee, list, i) {
    i = i || 0;
    var longList = append(listAppendee[i], list);
    if (listAppendee.length === i) { return longList; }
    return appendList(listAppendee, longList, i + 1);
}

function listCopy (list) {
    return slice(list, 0);
}

function slice (list, offset, i, freshList) {
    freshList = freshList || [];
    if (list.length === freshList.length + offset) { return freshList; }
    i = i || 0;
    freshList[i] = list[i + offset];
    return slice(list, offset, i + 1, freshList);
}