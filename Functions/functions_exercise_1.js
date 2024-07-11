//1. Function to check prime number
// function prime(num) {
//   if (num == 0 || num == 1) return false;
//   // Check and display alert message
//   if (num % 2 === 0) return false;
//   else return check(num);
// }

// function check(p) {
//   for (let i = 3; i <= Math.sqrt(p); i += 2)
//     if (p % i === 0) {
//       return false;
//     }
//   return true;
// }

// console.log(prime(97));

//2. Print 1.....100
// function print(num) {
//   if (num > 100) return;
//   else {
//     process.stdout.write(num + " ");
//     print(num + 1);
//   }
// }

// print(1);
// console.log();

//3. Fibonacci Number
// function fibonacci(num) {
//   if (num == 1) return 0;
//   if (num == 2) return 1;
//   var num1 = 0;
//   var num2 = 1;
//   var sum;
//   var i = 2;
//   while (i <= num) {
//     sum = num1 + num2;
//     num1 = num2;
//     num2 = sum;
//     i += 1;
//   }
//   return num2;
// }

// console.log("Fibonacci(5): " + fibonacci(10));
// console.log("Fibonacci(8): " + fibonacci(20));

//4. Bubble Sort

// Bubble sort Implementation using Javascript

// Creating the bblSort function
function bubbleSort(arr) {
  let swapped = true;
  for (let i = 0; i < arr.length && swapped; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // If the condition is true
        // then swap them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
  }

  // Print the sorted array
  console.log(arr);
}

// This is our unsorted array
//let arr = [234, 43, 55, 63, 5, 6, 235, 547];
let arr = [25, 20, 30, 5, 10, 15];

// Now pass this array to the bblSort() function
//bubbleSort(arr);

// Insertion Sort
function insertionSort(arr) {
  let i, key, j;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

Array.prototype.sort=function() {
  for (i = 1; i < this.length; i++) {
    key = this[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && this[j] > key) {
      this[j + 1] = this[j];
      j = j - 1;
    }
    this[j + 1] = key;
  }
}

let arr_ins = [234, 43, 55, 63, 5, 6, 235, 547];
insertionSort(arr_ins);
console.log(arr_ins);

let arr_proto_sort = [234, 43, 55, 63, 5, 6, 235, 547];
arr_proto_sort.sort()
console.log(arr_proto_sort)

//6. Binary Search
let iterativeFunction = (arr, x) => {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return true;
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};

let arr_bin = [1, 3, 5, 7, 8, 9];

//console.log(iterativeFunction(arr_bin, 6));



// function ReverseString(str) {
      
//     // Check input
//     if(!str || str.length < 2 ||
//             typeof str!== 'string') {
//         return 'Not valid';
//     }
      
//     // Take empty array revArray
//     const revArray = [];
//     const length = str.length - 1;
      
//     // Looping from the end
//     for(let i = length; i >= 0; i--) {
//         revArray.push(str[i]);
//     }
      
//     // Joining the array elements
//     return revArray.join('');
// }
  
//console.log(ReverseString("JavaScript"))

function revArray(arr) {
  //   if(!arr || arr.length < 2 ||
  //     typeof arr!== 'arring') {
  //   return 'Not valid';
  // }
  const last = arr.length-1;
  for(let first=0; first<last/2; first++) {
     let temp = arr[first];
     arr[first] = arr[last-first]
     arr[last-first] = temp
  }

  return arr;
}
//console.log(revArray([1,3,4,6,7,8,12]))

function checkPalindrome(str) {  
    // get the total length of the words  
    const len = str.length-1;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
        // validate the first and last characters are the same  
        if (str[i] !== str[len - i]) {   
          return false;
        }  
    }  
  // If they are not the same, then it is not a palindrome
    return true 
} 

//console.log(checkPalindrome("madam"))
//console.log(checkPalindrome([1,2,3,2,1,5]))

function revString(str){

  return str.split("").reverse().join("")
}

console.log(revString('srikanth venkat'))
