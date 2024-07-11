// const demo (Array & Object) , for....of loop


// Eg.01 Synchronous callback function

// console.log('Start')

// function divide(a, b) {
//   return a / b
// }

// function operation(val1, val2, callback) {
//   return callback(val1, val2)
// }

// console.log(operation(16, 4, divide))

// function sum(a, b) {
//     return a + b
//   }

//   console.log(operation(6, 5, sum))
// console.log('End')


//Eg.02 Async Function

let youGotThis = function () {
    console.log("You're doing really well, keep coding!");
  };

//setTimeout(youGotThis, 1000);
//setInterval(youGotThis, 1000);

//Eg.03 

// console.log('Start')

// setTimeout(() => {
//   console.log('We are in the setTimeout()')
// }, 0)

// console.log('End')

//Eg.04 
//Real World Example
 console.log("Start");
// //API for get requests
let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");

// // FetchRes is the promise to resolve
// // it by using.then() method
console.log(fetchRes)
fetchRes
  .then((res) => res.json())
  .then((d) => {
    console.log(d);
    console.log(fetchRes)
  })
  .catch((err) => {
    console.log(err.message);
    console.log(fetchRes)
  });

let add = (a, b) => a + b;
console.log(add(3, 5));

console.log("End");
