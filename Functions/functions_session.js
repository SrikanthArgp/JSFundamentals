// Simple function
// function addTwoNumbers(x=6 ,y=10) {
 
//     return x + y;
//   }

// console.log(addTwoNumbers(8))

//Animal a= new Animal()
// fun(Aninal animal,) {
// return Person;
//}

//Arrow function () => {}
// addTwoNumbersArrow = (x,y) => {
//     return x+y
// }

// console.log(addTwoNumbersArrow(8,7))


//spread operator

//  let spread = ["so", "much", "fun"];
//  let message = ["JavaScript", "is", ...spread, "and", "very","powerful"];

// console.log(message)

// // Spread use case
// let spreadClone = [... spread]
// spread[1] = "more"
// console.log(spread)
// console.log(spreadClone)


function greeting(name, callback) {
    console.log("Hello !");
    callback(name);
  }
  
  function farewell(name) {
    console.log("Goodbye",name);
  }

  function welcome(name) {
    console.log("Welcome", name)
  }


  greeting("Girish", welcome)
  greeting("John", farewell);