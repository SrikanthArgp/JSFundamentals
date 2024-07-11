// //String methods

let quote = 'This is java script';
console.log("type of quote:",typeof quote)
 quote[0]='r'
 console.log(quote);


// Split string using the space character 
// let array1 = quote.split(' '); 
// console.log(array1);
// console.log("type of array1: ",typeof array1 ) 
// console.log(quote[3])

 
// // Split string using an empty string (on each character)
// let array2 = quote.split(''); 
// console.log(array2); 
// console.log(quote)




// const text = "This is MongodB, Express, React, Node"
// console.log(text.includes("MongodB")); 
// console.log(text.includes("MongoDB")); 



// const text_start = "This is MongodB, Express, React, Node"
// console.log(text_start.startsWith("Hi")); 
// console.log(text_start.startsWith("This"));


// Split on comma (,) and semicolon (;).

// const list = "Car,Bus;Train"
// const vehicles= list.split(/[,;]/);
// console.log(vehicles); 



// let name_txt = "uttara";
// name_upp = name_txt[0].toUpperCase() + name_txt.substring(1);
// console.log(name_txt);
//  console.log(name_upp);
// console.log(name_txt.charAt(0));
// name_txt.charAt(name_txt.length-1)=name_txt.charAt(0)

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-4);
// console.log(part);

let str='uttara'
let ar_str = str.split("").reverse().join("")
console.log(ar_str)


