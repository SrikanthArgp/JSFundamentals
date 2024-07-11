
// Closure Example 1
function numberGenerator() {
  // local var
  let num = 1;
  function add(newNum) {
    num = num + newNum;
    return num;
  }
  return add;
}



// let number = numberGenerator();
// console.log(number(2)) 
//  console.log(number(3))
// console.log(number(5))
// console.log(number(6))


//Example 2
const createDatabase = () => {
  let storage = ["Apple", "Banana", "Carrot"];

  const addToDB = (itemToAdd) => {
    storage.push(itemToAdd);
    console.log(storage);
  };

  const clearDB = () => {
    storage = [];
    console.log(storage);
  };

  return [addToDB, clearDB];
};

const [add, clear] = createDatabase();

// add("kiwi");
// add("mango");
// clear();
// add("moose");


//Example 3
function doOuterFunctionStuff() {
    console.log("Outer function");
   // doInnerFunctionStuff();
    function doInnerFunctionStuff() {
      console.log("Inner Fuction ",)
    }
  }

  doOuterFunctionStuff()

