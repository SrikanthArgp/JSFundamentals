//1. Product of array
// let a = [];
// for (let i = 0; i < 5; i++) a[i] = i + 1;
// console.log(a.reduce((prod, val) => prod * val, 1));

// function product(ar){
//     return ar.reduce((prod, val) => prod * val, 1)
// }

// console.log(product(a));

// b=[3,5,8,3]
// console.log(product(b));

//2. prime 1,2,.....,100
// function isPrime(num) {
//   if (num == 0 || num == 1) return false;
//   else if (num == 2) return true;
//   else if (num % 2 == 0) return false;
//   else {
//     for (let i = 3; i <= Math.sqrt(num); i = i + 1) {
//       if (num % i == 0) return false;
//     }
//     return true;
//   }
// }

// let arr = [];
// for (let i = 0; i < 100; i++) arr[i] = i + 1;
// console.log(arr.filter((val) => isPrime(val)));

//3. Compute total amount of array of objects
// let obj_arr = [
//   { name: "soap", price: 15, quantity: 3 },
//   { name: "salt", price: 20, quantity: 5 },
//   { name: "sugar", price: 45, quantity: 2 },
// ];

// let amount = obj_arr.reduce((acc, obj)=>{
//   return acc+obj.price*obj.quantity
// },0)
// console.log(amount);

//4.Reverse string functional way
// function ReverseString(str) {
//     // Returning reverse string
//     return [...str].reduce((x, y) => {
//       //console.log(x,y)
//     return y.concat(x)},);
  
//   }

//   let rev_str= ReverseString("JavaScript")
//   console.log(rev_str);
  
  //5. reverse words in sentence
//   let rev_str= ReverseString("We Love JavaScript")
//   console.log("rev_str : ",rev_str)
//   let rev_word = rev_str.split(" ").reverse().join(" ")
//   console.log("rev_word : ",rev_word);


//6. remove duplicates in array
//method 1: imperative way
// let arr = ["apple", "mango","apple", "orange", "mango", "mango"];
// function removeDuplicates(arr) {
//   let unique = [];
//   for (let element of arr) {
//     if (!unique.includes(element)) unique.push(element);
//   }
//   return unique;
// }

// console.log(removeDuplicates(arr));

//method 2: functional way
// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
// function removeDuplicates(arr) {
// 	return arr.filter((item,index) => arr.indexOf(item) == index);
// }
// console.log(removeDuplicates(arr));


// const myTable = [];
// const numm = 10;
// for(let x=1; x<=numm; x++){
//     const temp = [];
//     for(let y = 1; y<=numm; y++){
//         temp.push(x*y);
//     }
//     myTable.push(temp);
// }
 
// console.table(myTable);

//reverse words in string
//we love js  ----> input
//ew evol sj -----> output

//sj evole ew


