/*
 * [ ] template strings
 * [ ] let, const
 * [ ] arrow functions
 * [ ] function signatures defaults
 * [ ] object shorthand
 * [ ] destructuring in function signatures and in the function body
 * [ ] spread and rest operators
*/


// syntactic sugar

function add(a, b) {
  return a + b;
}

var add = function(a, b) {
  return a + b;
}

var add = (a, b) => {
  return a + b;
}

var add = (a, b) => a + b;

let sayHello = name => 'Hello ' + name;

let getPerson = () => ({
  name: 'CJ'
});



// let name = 'CJ';
// let name2 = 'Berto';
// // let greeting = 'Hello ' + name;
// let greeting = `Hello ${name} and ${name2}`;

// console.log(greeting);


let person = {
  name: 'CJ',
  dog: 'Panzer',
  favColor: 'Green'
};

// let dogName = person.dog;
// let favColor = person.favColor;

const { dog: dogName, favColor } = person;
console.log(dogName);
console.log(favColor);

// let
// const - constant assignment, use if this variable will never be re-assigned

// use const everywhere... unless you can't, then use let

// don't use var...

const PI = 3.14;

// PI = 42; // won't work!

// Block Scope

function doTheThing() {
  // code goes here
  let answer = 42;

  if (true) {
    let answer2 = 50;
    console.log(answer2);
  } else {

  }

  // other blocks
  // for loop, while loop
  for (let i = 0; i < 100; i++) {

  }

  try {
    // do stuff here that might throw an error...
  } catch (error) {
    
  }

  const value = 42;

  switch(value) {
    case 42: {

    }
    default: {

    }
  }

}

doTheThing();

{
  let answer = 42;
  console.log(answer);
}


let answer = 42;
let name = 'CJ';

// const world = {
//   answer: answer,
//   name: name,
// };

// world[answer + 5] = 'hello';

const world = {
  answer,
  name,
  [answer + 5]: 'hello'
};

console.log(world);

