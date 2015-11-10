var test = require('tape');
//Arrow functions and scope
// To do: make all tests pass, leave the assert lines unchanged!
// Some of the tests might already pass but the challenge is to rewrite them with arrow functions so they still pass.
test('Arrow functions are super cool!', t => {
  t.test('arrow functions are always anonymous', st => {

    // rewrite the function below as an arrow function
    var es6ifyMe = () => "success";
    st.equals(es6ifyMe(), "success");
    st.end()
  });

  t.test('You can write functions in one line!', st => {

    //replace all functions below with arrow functions and try and get it all on one line!
    var arr = [1,2,3];

    var arrMap = arr => arr.map(num => num + 1);
    st.deepEquals(arrMap(arr), [2, 3, 4]);
    st.end()
  });

  t.test('That was fun - lets try writing one line functions again!', st => {

    //Write a ONE LINE function that filters out all the elements of the `things` array which have a color property blue
    // and then returns an array of their names

    var things = [{name: 'sky', colour: 'blue'}, {name: "apple", colour: "red"}, {name: 'blueberries', colour: 'blue'}, {name: "orange", colour: "oranage"}, {name: 'eye', colour: 'blue'}];


    // Solution 1
    var findMeBlueThings = things => things.filter(({colour}) => colour === 'blue').map(({name}) => name);

    // Solution 2
    // var findMeBlueThings = things => (
    //   things.reduce((blueStuff, thing) => (
    //     thing.colour==='blue' ? blueStuff.concat([thing.name]) : blueStuff)
    //   , [])
    // );

    st.deepEquals(findMeBlueThings(things), ["sky", "blueberries", "eye"]);
    st.end()
  });

  t.test('arrow functions share the same lexical `this` as their surrounding code so they inherit scope', st => {

    //write the print recipe function so it gets the correct value of `this` - hint: use an arrow function!
    var myBreakfast = {};

    myBreakfast.make = function () {
      var instructions = [["step1: toast the bagel"], ["step2: spread the peanut butter"], ["step3: add the sliced banana"]];
      var printRecipe = () => this.recipe = instructions.join(', ');
      return printRecipe();
    }

    st.equals(myBreakfast.make(), "step1: toast the bagel, step2: spread the peanut butter, step3: add the sliced banana");
    st.end()
  })
