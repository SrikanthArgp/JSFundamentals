let date = new Date().toLocaleString()
console.log(date)

const datet = Date.now();
console.log(datet);

let fdate = new Date(1735686000000).toLocaleString()
console.log(fdate)

//1735669800000

var dt = new Date("2024-02-22 23:59:59.999").toLocaleString();
console.log(dt)

console.log(Date.parse(dt))
console.log(dt.valueOf())


let adate = new Date();          // Get current Date

adate.setDate(adate.getDate()+5); 
console.log(adate.toLocaleString())
console.log(Date.parse(adate))

