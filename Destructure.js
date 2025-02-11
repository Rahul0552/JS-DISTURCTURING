import { person } from "./basicLevel.js";

console.log("Correctly destructuring the object",person);

console.log(" ");
console.log("Q:2 ");


import {a,b} from './basicLevel.js'

console.log('Swap the values of variables a and b using destructuring.');
console.log('a:', a);
console.log('b:', b);

console.log(" ");
console.log("Destructure the following nested object to extract the properties name and city ");

import { user } from "./basicLevel.js";

console.log("Username:", name); 
console.log("City:", user.city);     
console.log("Country:", user.country);


console.log(" ");
console.log("Use destructuring to extract and print name and age from the following object with default values in case they are missing. ");
import { person1 } from "./basicLevel.js";
console.log("Username:", person1.User_name); 
console.log("DOB:", person1.DOB); 

console.log(" ");
console.log("Destructure the following nested object to extract name, age, and city. ");

import {user1} from './MediumLevel.js'
console.log("Username:", user1.Uname); 
console.log("City:", user1.Uage);     
console.log("Country:", user1.city);
