// // Synchronous callback function

// console.log('Start')

// function divide(a, b) {
//   return a / b
// }

// function operation(val1, val2, callback) {
//   callback(val1, val2)
// }

// operation(16, 4, divide)

// function sum(a, b) {
//     return a + b
//   }

// operation(6, 5, sum)
// console.log('End')

// Asynchronous callback function
// console.log('Start')

// setTimeout(() => {
//   console.log('We are in the setTimeout()')
// }, 4000)

// console.log('End')

// let youGotThis = function () {
//     console.log("You're doing really well, keep coding!");
//   };

// //setTimeout(youGotThis, 1000);

// setInterval(youGotThis, 1000);

//Async Callback
console.log('Start')

function loginUserServer(email, callback) {
  setTimeout(() => {
    console.log('We have the data')
    callback( "Harish" )
  }, 2000)
}

const user = loginUserServer('harish.s@gmail.com', (user) => {
  console.log(user,"logged in successfully...")
})

console.log('End')