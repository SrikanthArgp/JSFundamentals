// JS Classes
class Person {
    constructor(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  let krish = new Person("Krish", "Kandy", 50, "blue");
  console.log(krish.getFullName());
  console.log(typeof krish)

  let kim = new Person("Jai", "Kim", 40, "red");
  console.log(kim.getFullName());

