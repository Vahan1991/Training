// function sum(a, b) {
//     return a + b;
// }
// let result = sum(2, 3)
// console.log(result)


// let Calc = {
//     sum: function(input1, input2){
//         return input1 + input2
//     },
//     subtract: function(input1, input2){
//         return input1 - input2
//     },
//     multiply: function(input1, input2){
//         return input1 * input2
//     },
//     divide: function(input1, input2){
//         return input1 / input2
//     }
// }
// console.log(Calc.multiply(2, 3))


// let User = {
//     name: 'Vah',
//     lastName: 'Marg',
//     age: 31,
//     phoneNum: '096122261',
//     address: 'G. N.',
//     social: {
//         facebook: {
//             url: 'https://www.facebook.com'
//         }
//     },
//     hobbies: ['music', 'movies', 'skating'],
//     motto: function(text) {
//         return text
//     }
// }
// console.log(User.motto('No easy way out'))
// console.log(User.social.facebook.url)



// const courseStatus = 'Ready' 
// console.log(courseStatus.length >= 5 ? 'Yes': 'No')

// const num1 = 31
// const num2 = "31"
// console.log(num1 == num2) // true
// console.log(num1 === num2) // false

// const isReady = true
// isReady ? console.log('All Ready') : console.log('Not Ready')

// console.log(true || false)
// console.log(true && false)


//// Functions
// function calculate(year) {
//     return 2022 - year
// }
// //// Same
// // const myAge = calculate(1991)
// // console.log(myAge) 
// // console.log(calculate(1991))

// function logInfoAbout(name, year) {
//     const age = calculate(year)
//     console.log('Man with name ' + name + ' now his age ' + age)
// }

// logInfoAbout('Vahan', 1991)


const pow = 10e3 // 10000
console.log(pow)
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53: ', Math.pow(2, 53) -1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)

const prsFloat = "42.1"
console.log(Number.parseFloat(prsFloat) + 2.2)
console.log(typeof NaN)
console.log(typeof isNaN) // function
console.log((0.4 + 0.2).toFixed(3))
console.log(parseFloat(0.4 + 0.2).toFixed(2))
// console.log(Math.sqrt(25))
// console.log(Math.E)
// console.log(Math.PI)

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min
}

console.log(getRandomBetween(10, 42))


console.log('================================================')
const name2 = 'Vlad'
const age3 = 31

function getAg() {
    return age3
}

const output = `Hey there, my name is ${name2} + my age is + ${age3 < 30 ? 'true' : 'false'} age.`
console.log(output)
// getAg()

const output2 = `
<div>This is div</div>
<p>THis is par</p>
`
console.log(output2)


