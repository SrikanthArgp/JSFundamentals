// Bubble sort Implementation using Javascript, hoisting


// Creating the bblSort function
function bubbleSort(arr) {
  let n = arr.length;
  for (let pass = n - 1; pass >= 1; pass--) {
    for (let j = 0; j < pass; j++) {
      if (arr[j] > arr[j + 1]) {
        // If the condition is true
        // then swap them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let a = [1, 8, 3, 6, 4];
console.log(bubbleSort(a));

console.log(a);

console.log(a);
