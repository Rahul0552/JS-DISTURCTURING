export const person = { name: 'John', age: 30 };
const {name,age}=person;
console.log(name);
console.log(age);

// Swap the values of variables a and b using destructuring.

export let a = 10;
export let b = 20;

console.log('original val_of a:', a);
console.log('original val_of b:', b);

[a,b] = [b,a];


// Destructure the following nested object to extract the properties name and city.

export const user = { name: 'Alice', address: { city: 'New York', country: 'USA' } };
// const { name: Username , address: { city , country } } = user;
// const { name: Username , address } = user;
const { name: Username, address: { city, country } } = user;
console.log(user); // Alias Concept


// Use destructuring to extract and print name and age from the following object with 
// default values in case they are missing.

export const person1 = { User_name: 'John' };
const {User_name="Default name" , DOB="22-12-2004"} = person1;


