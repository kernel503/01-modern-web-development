// [x] import
// [x] export

// import React, { useState } from 'react';

import World, { greet, name, people } from './myAwesomeModule.js';
import Animal from './Animal.js';

const { time } = World;

console.log(greet('CJ'));

const myDog = new Animal('Panzer');

console.log(name);
console.log(people);
