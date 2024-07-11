// //1. Function to check prime number
// function prime(num) {
//   if (num == 0 || num == 1) return false;
//   // even number
//   if (num % 2 === 0) return false;
//   else {
//     for (let i = 3; i <= Math.sqrt(num); i += 2)
//       if (num % i === 0) {
//         return false;
//       }
//     return true;
//   }
// }

// function primePromise(num) {
//   let promise = new Promise(function (resolve, reject) {
//     if (prime(num)) {
//       resolve("Success");
//     } else {
//       reject("Failure");
//     }
//   });
//   return promise;
// }

// // promise way
// // primePromise(59)
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// //async await way
// async function primeAsync(num) {
//   try {
//     let res = await primePromise(num);
//     console.log(res);
//   }
//   catch(err) {
//     console.log(err);
//   }
// }

// console.log(primeAsync(59));

//~ `
let lang='Javascript'
console.log("Our favourite PL is ",lang);
let msg = `Our favourite PL is ${lang}`
console.log(msg);

// function primePromise(num) {

//   let promise = new Promise(function(resolve, reject){
//       if(prime(num)){
//         resolve({res: "Yes", code: 1})
//       }
//       else
//       reject({res:"No",code: 0})
//   })
//   return promise;
// }

// promise way
// primePromise(59).then((res)=>{
//   console.log("then : ",res)
// }).catch((err)=>{
// console.log("catch : ",err );
// })

//async way
// async function primeAsync(num){
//   try{
//     let res = await primePromise(num)
//     console.log(res);
//   }
//   catch(err){
//     console.log(err);
//   }
// }

// console.log(primeAsync(57));
