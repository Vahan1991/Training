
// const nam = 'Valodik'

// console.log(nam.repeat(3))
// console.log(nam.startsWith('Va'))
// console.log(nam.charAt(2))
// console.log(nam.trim())



// function logPerson(s, na, age) {
//     console.log(s, na, age)
//     return 'Info about person'
// }

// const personName = "Vladik"
// const personAge = 31

// const output = logPerson `Name: ${personName}, Age: ${personAge + '+'}`
// console.log(output)


// // Functions
// greet() // Will
// // Function Declaration 
// function greet() {
//     //...
// }

// // greet2() // will not work
// // // Function Expression 
// // const greet2 = function greet(name) {
// //     //...
// // }


// // // Anonym Function
// // let counter = 0
// // const interval = setInterval( function () {
// //     if (counter === 5) {
// //         clearInterval(interval)
// //     } else {
// //         console.log(++counter)
// //     }
// // }, 1000)

// // console.log(interval)


// // Arrow Functions
// const arrow = (arrowName) => {
//     console.log('Hi', arrowName)
// }

// const arrow2 = arrowName => console.log('Hey', arrowName)
// arrow2('Vah')

// const pow = num => {
//     return num ** 5
// }
// // console.log(pow(2))

// const pow2 = num => num ** 5
// console.log(pow2(2))

// // Default Parameters
// const sum = (a, b = 5) => a + b
// console.log(sum(3))

// function sumAll(...all) {
//     let result = 0
//     for (let num2 of all) {
//         result += num2
//     } 
//     return result
//     // console.log(all)
// }
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)
// // sumAll(1, 2, 3, 4, 5)


// // Blocking 
// function createMember(name2) {
//     return function(lastName) {
//         console.log(name2 + lastName)
//     }
// }
// const logWithLastName = createMember('Vladik')
// console.log(logWithLastName)


// // Array
// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
// const fib = [1, 2, 3, 5, 8, 13, 21]
// cars.push('Mazda2')  // [ 'Mazda', 'Ford', 'BMW', 'Mercedes', 'Mazda2' ]
// cars.unshift('Volga')  // [ 'Volga', 'Mazda', 'Ford', 'BMW', 'Mercedes', 'Mazda2' ]
// const firstItem = cars.shift() // Volga 
// const lastCar = cars.pop()  
// cars.reverse()

// console.log(lastCar, cars)



// const text = 'jhdsb kdnjkd lkdmnkvd ksdkkdkdcm kdmfv'
// const rText = text.split('').join('*')
// console.log(rText)


// const people = [
//     {name: 'Vladik', budget: 4200},
//     {name: 'Elena', budget: 5200},
//     {name: 'Victoria', budget: 6200},
// ]


// cars[index] = 'Porsche'
// console.log(cars)
// const index = people.findIndex(function(person) {
//     return person.budget === 6200
// })
// const person = people.find(function(person) {
//     return person.budget === 5200
// })
// console.log(person)


// map() returns new array (always)

// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib)
// const pow3 = num => num ** 2
// const sqr = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow3).map(sqr)
// const filteredNumbers = pow2Fib.filter(num => num < 20)
// console.log(filteredNumbers)


// const people = [
//     {name: 'Vladik', budget: 4200},
//     {name: 'Elena', budget: 5200},
//     {name: 'Victoria', budget: 6200},
// ]
// const allBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//     acc += person.budget
//     return acc
// }, 0)

// const Employee = {
//     firstname: 'John',
//     lastname: 'Doe'
//   };

// delete Employee.firstname
// console.log(allBudget, Employee)



console.log('=================================================================================')

const person = {
    nam: 'Vah',
    age: 31, // if undefined
    languages: ['English', 'RU', 'AM'],
    greet() {
        console.log('greet from person')
    },
    info() {
        console.info('Info about the person with name:', person.nam)
    } // Ask from Anushik why does not print out the name?
}
// const {nam, age: personAge = 1991, languages} = person
// console.log(nam, personAge, languages)


// "for" is dangerous because it can run not only into object, it can also run into that prototype. 
// For avoiding of the problems, then need to write an if statement inside loop
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key])
        //console.log('key:', key)
        //console.log('value:', person[key])
    }
}



// // forEach is not dangerous because will not run into prototypes
// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])

// })