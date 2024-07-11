// Simple function
// function addTwoNumbers(x ,y) {
 
//     return x + y;
//   }

// console.log(addTwoNumbers(8,3))


//Animal a= new Animal()
// fun(Aninal animal,) {
// return Person;
//}

//Arrow function () => {}
 let addTwoNumbersArrow = (x,y) => {
    return x+y
}

console.log(addTwoNumbersArrow(8,7))
console.log(typeof addTwoNumbersArrow)



//spread operator
//console.log(Math.min(8,2,9,4))

// let arr=[8,2,9,4]
// console.log(Math.min(...arr))

//  let spread = ["so", "much", "fun"];
//  let message = ["JavaScript", "is", ...spread, "and", "very","powerful"];

// console.log(message)

// // Spread use case
//let spreadClone = [...spread]
// spread[1] = "more"
// console.log(spread)
// console.log(spreadClone)

//  Concepts/ Topics
// Rest Opearator
// Scopes of variables
// 
// Nested Functions
// Callbacks

// let arr = [5, 9];
// res=addTwoNumbers(...arr);
// console.log(res)

//rest Operator
// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
//   }
//   someFunction("hi", "there!", "How are you?");

// function without rest parameter
// function addition(x, y) {
//   return x + y;
// }
// console.log(addition(4, 5));
// console.log(addition(4, 5, 6, 7, 8));


// Example with rest operator
// function additionRest(...myArgs) {
//   let sum = 0;
//   for (let i of myArgs) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(additionRest(5, 6));
// console.log(additionRest(5, 6, 7));
// console.log(additionRest(5, 6, 7, 8, 9));       


//Variable Scopes
  // function testAvailability(x) {
  //   console.log("Available here:", x);
  // }

  //  testAvailability("Hi!");
  // console.log("Not available here:", x);

// function testAvailability() {
//     let y = "Local variable!";
//     console.log("Available here:", y);
//   }

//   testAvailability();
//   console.log("Not available here:", y);




// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
//   }
//   let z = testAvailability();
//   console.log("Outside the function:", z);
// console.log("Not available here:", y);

//let vs var
//   function doingStuff() {

//     if (true) {
//       var x = "local";
//       console.log(x);
//     }
//     console.log(x);
    
//   }
  
// doingStuff();
//console.log(x);

// Recursive funtion
// function printNum(nr) {
//       if(nr==0)
//         return;
//     //if(nr!=0)
//     console.log(nr);
//     printNum(--nr);
//   }

//  printNum(3);

//Nested Functions
// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//       console.log("Inner Fuction arg x",x)
//       console.log(x + 7);
//       console.log("I can access outer variables:", nr);
//     }
//   }
//   doOuterFunctionStuff(2);

  //  function doOuterFunctionStuff(nr) {
  //   doInnerFunctionStuff(nr);
  //   function doInnerFunctionStuff(x) {
  //     let z = 10;
  //   }
  //   console.log("Not accessible:", z);
  // }

  // doOuterFunctionStuff(2);

//Anonymous Functions

  // let anonymousAdd =  (x,y) =>{
  //   return x+y;
  // };

  // console.log(anonymousAdd(5,4))

//Function Callbacks
// (a,b)=>{a+b} 
// function doFlexibleStuff(executeStuff) {
//     console.log("Inside doFlexibleStuffFunction: Before");
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction: After");
//   }

//   let anotherFunctionVariable = function() {
//     console.log("Another anonymous function implementation.");
//   }

//   let yetAnotherFunctionVariable = function() {
//     console.log("Yet Another anonymous function implementation.");
//   }


//   doFlexibleStuff(yetAnotherFunctionVariable);

  

// let youGotThis = function () {
//     console.log("You're doing really well, keep coding!");
//   };

// //setTimeout(youGotThis, 1000);

// setInterval(youGotThis, 1000);
