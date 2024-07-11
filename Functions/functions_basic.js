// 1. Simple function
// function addTwoNumbers(x, y) {
//   return x + y;
// }

// console.log(addTwoNumbers(5, 4));
// console.log(typeof addTwoNumbers);

//2. Anonymous Functions
// let addAnonymous = function (a=2 ,b=6) {
//   return a+b
// }

// console.log(addAnonymous())
// console.log(typeof addAnonymous);

//3. Arrow function () => {}
//  let addTwoNumbersArrow = (x,y) => {
//     return x+y
// }

// console.log(addTwoNumbersArrow(8,7))
// console.log(typeof addTwoNumbersArrow)

//4. spread operator
// console.log(Math.min(8,2,9,4))

// let arr=[8,2,9,4]
// console.log(Math.min(...arr))

// let spread = ["so", "much", "fun"];
//  let message = [...spread,"JavaScript", "is" , "and", "very","powerful"];

// console.log(message)

//5. Spread use case
// let spread = ["so", "much", "fun"];
// let spreadClone = [...spread]
// spread[1] = "more"
// console.log(spread)
// console.log(spreadClone)

//6. Rest operator
// let arr = [5, 9];
// res=addTwoNumbers(...arr);
// console.log(res)

//rest Operator

//function without rest parameter
// function addition(x, y) {
//   return x + y;
// }
// console.log(addition(4, 5));
// console.log(addition(14, 5, 6, 7, 8));

//Example with rest operator
// function additionRest(...myArgs) {
//   let sum = 0;
//   for (let i = 0; i < myArgs.length; i++) {
//     sum += myArgs[i];
//   }
//   return sum;
// }
// console.log(additionRest(5, 6));
// console.log(additionRest(5, 6, 7));
// console.log(additionRest(5, 6, 7, 8, 9));

//7. Variable Scopes
//   function testAvailability(x) {
//     console.log("Available here:", x);
//   }

//    testAvailability("Hi!");
//  console.log("Not available here:", x);

//  function testAvailability() {
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
//  console.log("Not available here:", y);

//let vs var
// function doingStuff() {

//   if (true) {
//     let x = "local";
//     console.log("block scope : ",x);
//   }
//   console.log("function scope : ",x);

// }

// doingStuff();
// console.log("global scope : ",x);

//8. Callback Functions
// console.log('Start')

// function divide(a, b) {
//   return a / b
// }

// function operation(val1, val2, callback) {
//   let result=callback(val1, val2)
//   return result
// }

// console.log(operation(16, 4, divide))

// function sum(a, b) {
//     return a + b
//   }

// console.log(operation(6, 5, sum))
// console.log('End')

//9. Nested Functions
// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//       console.log("Inner Fuction arg x",x)
//       console.log(x + 7);
//       console.log("I can access outer variables:", nr);
//     }

//     console.log(x);
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

// 10. A function that returns another function
function createMultiplier(x) {
  return function(y) {
     return x * y;
  };
}

// Call the createMultiplier function and assign the returned function to a variable
let double = createMultiplier(3);

// Use the returned function to perform a calculation
console.log(double(5)); // Output: 10

//Function Callbacks
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

//   doFlexibleStuff(anotherFunctionVariable);
