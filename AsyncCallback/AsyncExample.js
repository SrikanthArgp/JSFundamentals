
// console.log("Start")
// setTimeout(() => {
//   console.log('We have the data')
// }, 2000)


// let sum=(a,b) => a+b

// console.log(sum(5, 9))

// console.log("End")




// Promise Example:
// Promise return
 function areStringsSame(str1, str2) {

  const promise = new Promise(function (resolve, reject) {
    if (str1 === str2) {
      resolve("Sucess");
    } else {
      
      reject(new Error("Failure"));
    }
  });
  return promise;
}

//Promise usage
areStringsSame("uttara", "uttra")
  .then(function (res) {
    console.log("then...",res);
  })
  .catch(function (err) {
    console.log("catch......",err.message);
  });



// //asyn  await version of promise
// async function demoPromise(str1, str2) {
//   try {
//     let message = await areStringsSame(str1, str2);
//     console.log(message);
//   } catch (error) {
//     console.log( error);
//   }
// }

//demoPromise("uttara", "uttar");



//Real World Example
//console.log("Start");
// API for get requests
//let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");

// // // FetchRes is the promise to resolve
// // // it by using.then() method

// fetchRes
//   .then((res) => res.json())
//   .then((d) => {
//     console.log(d);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// let add = (a, b) => a + b;
// console.log(add(3, 5));

// console.log("End");



//async  await version of fetch

async function fetchData(url){
  try {
    let fetchRes = await fetch(url);
    let data = await fetchRes.json()
    console.log(data);
  }
  catch(err){
    console.log(err.message);
  }
  
}

console.log("start")
fetchData("https://fakestoreapi.com/products");
console.log("end")



