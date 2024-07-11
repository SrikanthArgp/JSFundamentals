// Object literal notation

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person);

// const person_two = {};
// person_two.firstName = "John";
// person_two.lastName = "Doe";
// person_two.age = 50;
// person_two.eyeColor = "blue";
// console.log(person_two);

// const person_three = new Object();
// person_three.firstName = "John";
// person_three.lastName = "Doe";
// person_three.age = 50;
// person_three.eyeColor = "blue";

// //Objects are mutable
// person_three.age = 40;

// console.log(person_three);

// const person_four = {
//   firstName: "Srikanth",
//   lastName: "Venkatesh",
//   id: 5566,
//   //object methods
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

//console.log(person_four.fullName());

const person_five = {
  firstName: "Chandra",
  lastName: "Singh",
  id: 5568,
  //object methods
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person_five.fullName());




