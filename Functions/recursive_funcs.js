function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
  }

 console.log(sum(10)); 

 arr = [1,4,6,8,9]

 function sumarr(ar, i) {
    if(i==ar.length -1){
        return ar[i]
    }
    return ar[i] + sumarr(ar, i+1)
 }

 console.log(sumarr(arr,0))