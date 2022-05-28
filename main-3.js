const nam = 'Valodik'

console.log(nam.repeat(3))
console.log(nam.startsWith('Va'))
console.log(nam.charAt(2))
console.log(nam.trim())



function logPerson(s, na, age) {
    console.log(s, na, age)
    return 'Info about person'
}

const personName = "Vladik"
const personAge = 31

const output = logPerson `Name: ${personName}, Age: ${personAge + '+'}`
console.log(output)


// Functions
greet() // Will
// Function Declaration 
function greet() {
    //...
}

// greet2() // will not work
// // Function Expression 
// const greet2 = function greet(name) {
//     //...
// }

// Anonym Function
let counter = 0
const interval = setInterval( function () {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)

console.log(interval)

