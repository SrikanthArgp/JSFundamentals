function add(a, i) {
    if(i==a.length-1) return a[i]
    else{
        return a[i]+ add(a,i+1)
    }
}

let arr=[1,6,9,12]

console.log(add(arr,0));