// Synchronous callback function

console.log('Start')

function divide(a, b) {
  return a / b
}



function operation(val1, val2, callback) {
  callback(val1, val2)
}

operation(16, 4, divide)

function sum(a, b) {
    return a + b
  }

operation(6, 5, sum)

console.log('End')

// Asynchronous callback function
console.log('Start')

setTimeout(() => {
  console.log('We are in the setTimeout()')
}, 4000)

console.log('End')


console.log('Start')

function loginUserServer(email, callback) {
  setTimeout(() => {
    console.log('We have the data')
    callback( email )
  }, 5000)
}

const user = loginUserServer('muditwt@scaler.com', (user) => {
  console.log(user)
})

console.log('End')