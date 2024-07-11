
//const in array and object, for ..of loop
// ar=[1,6,3,9,4]
// for(let val of ar)
// console.log(val)

// for(let i=0; i<ar.length;i++)
// console.log(ar[i])

// const ar=[1,5,2,7,8]
// ar.push(9)
// console.log(ar)

// ar=[5,2,0]

// const p1={
//     name: "sri",
//     age:25
// }
// console.log(p1)
// p1.height=5
// console.log(p1)
// p2={
//     name:"krish"
// }

// p1=p2

//Ex.02 
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


//Ex.03
//let obj_arr = [
//   { name: "soap", price: 15, quantity: 3 },
//   { name: "salt", price: 20, quantity: 5 },
//   { name: "sugar", price: 45, quantity: 2 },
// ];

// let amount = obj_arr.reduce((acc, obj)=>{
//   return acc+obj.price*obj.quantity
// },0)
// console.log(amount);

//Ex.04
//Function to reverse the string
// function reverseString(str) {
//     // Returning reverse string
//         return [...str].reduce((a,c)=> c+a)
//   }
  
//    console.log(reverseString("Srikanth loves JavaScript"));

//Ex.05
//Method 1
// let arr = ["apple", "mango","apple", "orange", "mango", "mango"];
// function removeDuplicates(arr) {
//   let unique = [];
//   for (let element of arr) {
//     if (!unique.includes(element)) unique.push(element);
//   }
//   return unique;
// }

// console.log(removeDuplicates(arr));

// //Method 2
// let arr = ["apple", "mango", "apple",
//           "orange", "mango", "mango"];

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));

// Method 3 what to do
// let arr = ["apple", "mango", "Apple", "orange", "mango", "mango"];
// function removeDuplicates(arr) {
// 	return arr.filter((item,index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));

//Ex.06
//Method 1
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [3, 4, 5, 7];
// let arr = [...arr1, ...arr2];
// let mergedArr = [...new Set(arr)]
// console.log(mergedArr);

//Method 2
// let arr1 = [1, 5, 3];
// let arr2 = [4, 5, 6];

// let merge_ar=arr1.concat(arr2.filter((val)=> arr1.indexOf(val)<0))
// console.log(merge_ar)



// Create a Set
// const letters = new Set();

// // Add values to the Set
// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// console.log(letters)
