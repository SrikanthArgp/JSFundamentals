// JS Constructor Function
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function () {
      return this.firstName + " " + this.lastName;
    };
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
 
  // console.log(myFather);
  // console.log("type of myFather : ",typeof myFather)
  // console.log(myMother);
  // console.log(myMother.name());

  // myFather.nationality="British"
  // console.log(myFather.nationality);
  // console.log(myMother.nationality);
  
  // Person.prototype.nationality = "Indian";
  //  myFather.nationality = "British";
  //  console.log(myFather.nationality);
  //  console.log(myMother.nationality);
 

  // Person.prototype.greet=function (){
  //   return 'Hi I am '+this.name()
  // }

  // console.log(myFather.greet());
  // console.log(myMother.greet())
