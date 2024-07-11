// // A function that returns another function
// function createMultiplier(x) {
//   return function(y) {
//      return x * y;
//   };
// }

// // Call the createMultiplier function and assign the returned function to a variable
// let double = createMultiplier(2);
// console.log(typeof double);
// // Use the returned function to perform a calculation
// console.log(double(5)); // Output: 10


//Async Introduction
console.log("Start......");

let youGotThis = function () {
    console.log("You're doing really well, keep coding!");
  };

setTimeout(youGotThis, 0);

// setInterval(youGotThis, 1000);

console.log("End ......");