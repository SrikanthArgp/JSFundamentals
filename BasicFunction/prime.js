function isPrime(num) {
  if (num == 0 || num == 1) return false;
  else if (num == 2) return true;
  else if (num % 2 == 0) return false;
  else {
    for (let i = 3; i <= Math.sqrt(num); i = i + 1) {
      if (num % i == 0) return false;
    }
    return true;
  }
}

console.log(typeof isPrime);
console.log(isPrime(25));

let prime = (num) => {
  if (num == 0 || num == 1) return false;
  else if (num == 2) return true;
  else if (num % 2 == 0) return false;
  else {
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i = i + 2) {
      if (num % i == 0) return false;
    }
    return true;
  }
};

console.log(typeof prime);
console.log(prime(97));


