import Person from './Person.js';

const person = new Person();

person.Name = 'Mukul Jain';
person.Address = '231, R.A.Bazar, Topkhana';
person.Dob = '1989-04-15';

console.log(person.printAddress());
const addressLines = person.printAddress();
document.getElementById('address').innerHTML = addressLines;

console.log(person.calculateAge());
const age = person.calculateAge();
document.getElementById('age').innerHTML = age;
