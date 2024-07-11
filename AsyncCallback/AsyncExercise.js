// //Problem 1
// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example  
//     let x = 10;
//     if (x > 10) {
//         resolve(x); // on success
//     } else {
//         reject("Too low");  // on error
//     }
// });

// promise.then(
//     function (value) {
//         console.log("Success:", value);
//     },
//     function (error) {
//         console.log("Error:", error);
//     }
// );

// //Problem 2
// const promise = new Promise((resolve, reject) => {
//     resolve("success!");  
// }).then(value => {
//         console.log(value);
//         return "we";
// }).then(value => {
//         console.log(value);
//         return "can";
// }).then(value => {
//         console.log(value);
//         return "chain";
// }).then(value => {
//     console.log(value);
//     return "promises";
// }).then(value => {
//     console.log(value);
// }).catch(value => {
//     console.log(value);
// })

// //Problem 3
// function addOne(val){
//     return val + 1;
// }

// function total(a, b, callback){
//     const sum = a + b;
// return callback(sum);
// }

// console.log(total(4, 5, addOne));

//Problem 4
// function checker(val) {
//     return new Promise((resolve, reject) => {
//       if (val > 5) {
//             resolve("Ready");
//       } else {
//             reject(new Error("Oh no"));
//       }
//     });
// }

// checker(5)
// .then((data) => {console.log(data); })
// .catch((err) => {console.error(err.message); });



