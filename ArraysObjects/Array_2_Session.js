//Eg.01 Push
// let favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");
// console.log(favoriteFruits);

// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(lengthOfFavoriteFruits);
// console.log(favoriteFruits);

//Eg.02 splice
// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

// arrOfShapes.splice(2, 3, "hexagon", "octagon");
// console.log(arrOfShapes);

// arrOfShapes.splice(2, 12, "square", "trapezoid");
// console.log(arrOfShapes);


//Eg.03 conat
// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);

// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);


//Eg.04 Removal
// arr8.pop();
// console.log(arr8);

//Eg.05 Shift
// arr8.shift();
// console.log(arr8);

//Eg.06 
// arr8.unshift(15)
// console.log(arr8);

// arr8.splice(1, 3);
// console.log(arr8);

//delete arr8;
//arr8[0] = 16
//console.log(arr8); 


//Eg.07 indexof
// let findIndex = arr8.indexOf(6);
// let findIndex2 = arr8.indexOf(10);

// console.log(findIndex, findIndex2);

//Eg.08 
// let animals = ["dog", "horse", "cat", "platypus", "dog",'monkey']
// let lastDog = animals.lastIndexOf("dog");
// let firstDog = animals.indexOf("dog")
// console.log(lastDog, firstDog);

//Eg.09
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// console.log(names)

// let ages = [18, 72, 33, 56, 40];
// ages.sort();

// console.log(names);
// console.log(ages);

// names.reverse();
// console.log(names);

// Eg.10 slice immutable method
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 4);
console.log(citrus)
console.log(fruits)



