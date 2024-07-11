// try {
//     // code may cause error
//   } catch(error){
//     // code to handle error
//   }

console.log('Start')

//simple way
//const add = (x, y) => x + y;
//add(10,20)

//better way
try {
  let result = add(10, 20);
  console.log(result);
} catch (e) {
  console.log({ name: e.name, message: e.message });
}


 console.log("End");
