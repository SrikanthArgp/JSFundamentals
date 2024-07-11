const myTable = [];
const numm = 10;
for(let x=0; x<=numm; x++){
    const temp = [];
    for(let y = 0; y<=numm; y++){
        temp.push(x*y);
    }
    myTable.push(temp);
}
 
//console.table(myTable); 
//console.log(myTable)

//Eg.2
// const x = 3;
// switch (true) {
//     case (x < 5):
//         console.log("less than five");
//         break;
//     case (x < 9):
//         console.log("between 5 and 8");
//         break;
//     case (x < 12):
//         console.log("between 9 and 11");
//         break;
//     default:
//         console.log("none");
// }


//Eg.3
// const q = 1;
// switch (q) {
//     case '1':
//         answer = "one";
//         break;
//     case 1:
//         answer = 1;
//         break;
//     case 2:
//         answer = "this is the one";
//         break;
//     default:
//         answer = "not working";
// }
// console.log(answer);

//Eg.4
// function sum_sq(array) {
//     var sum = 0, 
//         i = array.length;
//     while (i--) 
//      sum += array[i]**2;
//     return sum;
//   }
   
//   console.log(sum_sq([0,1,2,3,4]));


//Eg.5
// for (let x=0; x<=15; x++) {
//     // if (x === 0) {
//     //         console.log(x +  " is even");
//     // }
//      if (x % 2 === 0) {
//             console.log(x + " is even");   
//     }
//     else {
//             console.log(x + " is odd");
//     }
// }

//Eg.6
//  function pairSum(arr, target) {
//     let left=0, right=arr.length
//     while(left<right) {
//         if(arr[left]+ arr[right] == target)
//         return true
//         else if(arr[left]+ arr[right] < target)
//         left++
//         else
//         right--
//     }
//     return false
//  }

//  let res=pairSum([2,4,7,8,9,10,14,16],5)

//  console.log(res)

//Eg.7
// str=""
// for(let i=1;i<=100;i++) {
//     if(i%3==0) continue   
//     str+=" "+i
// }
// console.log(str)

// let sum = 0;
// for (let x = 0; x < 1000; x++)
// {
//     if (x % 3 === 0 || x % 5 === 0)
//     {
//        sum += x;
//     }
// }
// console.log(sum);

// function greater(num1, num2){
//     if(num1 > num2)
//         return num1
//     else if(num2 > num1)
//         return num2
//     else
//         return num1
// }

// //let large = greater(14,14)
// console.log(greater(14,19))

let sum=0
for(let i=1; i<1000;i++) {
    if(i%3==0 || i%5==0){
        sum+=i
    }
}
console.log(sum)





