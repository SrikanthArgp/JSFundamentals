// //Group starting with 2 Ms
// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
//   ];

// for (let i = 0; i < groups.length; i++) {
//     let matches = 0;
//   for (let j = 0; j < groups[i].length; j++) {
//     if(groups[i][j].startsWith("M")){
//         matches++;
//       } else {
//         continue;
//       }
//     if (matches === 2){
//         console.log("Found a group with two names starting with an M:");
//         console.log(groups[i]);
//         break;
//       }
//     }
//     //here
//   }

////2. Reverse array

// function revArray(arr) {

//     const last = arr.length-1;
//     for(let first=0; first<last/2; first++) {
//        let temp = arr[first];
//        arr[first] = arr[last-first]
//        arr[last-first] = temp
//     }

//     return arr;
//   }
//   console.log(revArray([1,3,4,6,7,8,12]))

function revArrayImproved(arr) {
  let last = arr.length - 1;
  let first = 0;

  //for(let first=0; first<last/2; first++) {
  //    let temp = arr[first];
  //    arr[first] = arr[last-first]
  //    arr[last-first] = temp
  while (first < last) {
    [arr[first], arr[last]] = [arr[last], arr[first]];
    first++, last--;
  }

  return arr;
}
//console.log(revArrayImproved([1,3,6,4,7,8,12]))

// //3. Fibonacci Number : 0,1,1,2,3,5,8,
// function fibonacci(num) {
//     if (num == 1) return 0;
//     if (num == 2) return 1;
//     var num1 = 0;
//     var num2 = 1;
//     var sum;
//     var i = 2;
//     while (i <= num) {
//       sum = num1 + num2;
//       num1 = num2;
//       num2 = sum;
//       i += 1;
//     }
//     return num2;
//   }

//   console.log("Fibonacci(5): " + fibonacci(10));
//   console.log("Fibonacci(8): " + fibonacci(20));

// Q.Implement using recursion

//4.
// for loop from 1...100
//let variable val;
// check for divisibility by 3
//val+="fizz"
// check for divisibility by 5
//val+="buzz"
//else
//val=i
//console log val

// 4.  // Print 1 ..... 100
//   for (let i = 1; i <= 100; i++) {
//     let f = i % 3 == 0,
//      b = i % 5 == 0;
//       console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
// }

// // // 5. Reverse Each word in sentence
// let string = "Welcome to this Javascript Guide!";

//split str into array with separator " "
// Take the indivudual item split with "", reverse,join with ""
// join with " "

// function reverseBySeparator(string, separator) {
//     return string.split(separator).reverse().join(separator);
//   }

// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// let reverseEntireSentence = reverseBySeparator(string, "");
// console.log(reverseEntireSentence)

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// console.log(reverseEachWord)

// 6. Remove duplicates in the array
// let arr = ["apple", "mango","apple", "orange", "mango", "mango"];

// //Method 1
// function removeDuplicates(arr) {
//     let unique = [];
//     arr.forEach(element => {
//     if (!unique.includes(element)) {
//          unique.push(element);
//     }
//     });
//         return unique;
//     }

// console.log(removeDuplicates(arr));

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
// 	return arr.filter((item,	index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));

// // 7. Remove duplicates in merged array

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [3, 4, 5, 7];
// let arr = [...arr1, ...arr2];
// let mergedArr = [...new Set(arr)]
// console.log(mergedArr);

// let arr1 = [1, 5, 3];
// let arr2 = [4, 5, 6];
// let newArr = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0));
// console.log(newArr);

// Function to reverse the string
function reverseString(str) {
  // Returning reverse string
  return [...str].reduce((x, y) => {
    console.log(x,y)
  return y+x},);

}

 console.log(reverseString("Srikanth loves JavaScript"));

//8. k largest items from the array
// let arr = [93, 17, 56, 91, 98,33, 9, 38, 55, 78, 29, 81, 60];
// function findkLargest(arr,k) {
//     arr.sort((x,y)=>x-y);
//     console.log(arr)
//     return arr.slice(arr.length-k)
// }

// console.log(findkLargest(arr,3));

// let a = [];
// for (let i = 0; i < 5; i++) a[i] = i + 1;
// console.log(a.reduce((prod, val) => prod * val, 1));

// let ar = [];
// for (let i = 0; i < 100; i++) ar[i] = i + 1;
// console.log(ar.filter((val) => val % 3 != 0 && val % 5 != 0));

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

// let obj_arr = [
//   { name: "soap", price: 15, quantity: 3 },
//   { name: "salt", price: 20, quantity: 5 },
//   { name: "sugar", price: 45, quantity: 2 },
// ];

// let amount = obj_arr.reduce((acc, obj)=>{
//   return acc+obj.price*obj.quantity
// },0)
// console.log(amount);

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }
// console.log([...generateSequence(1,10)].reduce((prod, val) => {
// return prod * val}, 1));

// function* idGenerator() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// const ids = idGenerator();

// console.log(ids.next().value); // 0
// console.log(ids.next().value); // 1
// console.log(ids.next().value); // 2
// console.log(ids.next().value); // 3
// console.log(ids.next().value); // 4


// Array.prototype.mysort = function (compareFunction) {
//   for (let i = 0; i < this.length - 1; i++) {
//     for (let j = 0; j < this.length - i - 1; j++) {
//       if (compareFunction ? compareFunction(this[j], this[j + 1]) > 0 : this[j] > this[j + 1]) {
//         const temp = this[j];
//         this[j] = this[j + 1];
//         this[j + 1] = temp;
//       }
//     }
//   }
//   return this;
// }

// let arr_ins = [1,25,6, 8,2,10,9,15];
// arr_ins.mysort((a,b)=>a-b)
// console.log(arr_ins)

