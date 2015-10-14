var obj2 = Object.keys(obj).filter(function(a){

    return (obj[a].lastName[0]) === 'd';
}).reduce(function(prev, current){

    prev[current]= obj[current];
    console.log(prev);
    return prev;

}, []);

console.log(obj2);
