let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}



let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
    console.log("false");
  } else {
    someArray.shift();
  }
}

console.log(someArray);