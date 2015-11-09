var test = require('tape');

// Destructuring
// To do: make all tests pass, leave the assert lines unchanged!

test('destructuring is amazing!', t => {

  t.test('extract a value from array and assign it to a variable, e.g. extract "apple" into x like so `let [x] = ["apple"];`', st => {

    var N = ["November"];
    var [N] = ["November"];

    st.equals(N, "November");
    st.end();
  });

  t.test('swap two variables, in one operation', st => {

    var [first, second] = ["peanut butter", "jam"];

    var [x, y] = [first, second];
    [x, y] = [y, x];

    st.deepEquals([x, y], ['jam', 'peanut butter']);
    st.end();
  });

  t.test('use leading commas as placeholders for array elements', st => {

    var all = ['foo', 'bar', 'baz'];

    var [,,z] = all;


    st.equals(z, 'baz');
    st.end();
  });

  t.test('extract data into variables from nested arrays', st => {

    var user = [['Harry', 'Potter'], 'Cupboard under the stairs, Privet Drive'];

    var [[firstName, surname], address] = user;

    var person = firstName + " " + surname + ' lives at '+ address;

    var expected = 'Harry Potter lives at Cupboard under the stairs, Privet Drive';

    st.equals(person, expected);
    st.end();
  });

  t.test('extract keys from an object', st => {

   var {x} = {x: 1};


   st.equals(x, 1);
   st.end();

 });

 t.test('extract a key from an object and assign it to a variable', st => {

   //var [x,y]={x: 1};
   var {x:y} = {x: 1};

   st.equals(y, 1);
   st.end()

  });

 t.test('extract keys from multiple nested objects', st => {

//    var {magic: second} = {magic: {first: 23, second: 42} };
      var {magic: {second}} = {magic: {first: 23, second: 42} };

    st.equals(second, 42);
    st.end();
  });

  t.test('extract keys from an array nested in an object', st => {

        var {wallet:{money:[,quid,]}} = {wallet: {money: ['50p', '£1', '£10']}};

    st.equals(quid, '£1');
    st.end();
  });

  t.test('extract keys from an object nested in an array', st => {

     var [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
    st.equals(lang, 'ES6');
    st.end();
  });
-
  t.test('extract properties from built ins like String', st => {

    var {prototype:{substr}} = String;

    st.equals(substr, String.prototype.substr);
    st.end();
  });

});
