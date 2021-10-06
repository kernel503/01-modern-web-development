export default {
  time: new Date(),
};

export function greet(name) {
  return `Hello, ${name}`;
}

// CommonJS - node.js
// module.exports.greet = function(name) {

// }
// const greet = require('./myAwesomeModule');

// ES Modules
// Ecmascript Modules

export const name = 'CJ';

export const people = [{
  name: 'CJ'
}, {
  name: 'Irvin'
}, {
  name: 'Berto'
}];
