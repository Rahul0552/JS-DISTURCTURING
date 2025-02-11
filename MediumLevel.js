// Destructure the following nested object to extract name, age, and city.
export const user1 = { details: { Uname: 'Alice', Uage: 25, address: { city: 'New York', country: 'USA' } } };
const { details: { Uname, Uage, address: { city, country } } } = user1 ;
