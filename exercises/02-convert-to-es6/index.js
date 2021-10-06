/*
The following code will be refactored when:
 * Use template strings - do not use + to concatenate strings
 * Do not use var anywhere in your code - only use let and const
 * Use arrow functions where necessary - anonymous functions should be arrow functions
 * Declare defaults in function signatures - don't use || to declare a value
 * Use object shorthand to setup objects
 * Use destructuring in function signatures and in the function body
 * Use the spread and rest operators
 * Use modules to organize your code
*/
import people from './people.js';
import { getEmails, getAddresses, getYoungest } from './people-functions.js';

const emails = getEmails(people, {
  withNames: true,
});
console.log(emails);

const addresses = getAddresses(people, {
  onlyActive: true,
});
console.log(addresses);

const youngest = getYoungest(people);
console.log(youngest);
