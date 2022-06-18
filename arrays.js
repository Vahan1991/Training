// Arrays

const cars = ['Mercedes', 'BMW','Mazda']

cars[1] = 'Porsche'
console.log(cars[1])
console.log(cars[0])
console.log(cars[0].length)

console.log('================================================')

const person = {
    name: 'Vle',
    age: 200,
    isProgrammer: false,
    languages: ['am', 'ru', 'de'],
    'complex key': 'Complex value',
    ['Key_' + (1 + 4)]: 'Computed Key',
    greet() {
        console.log('Greeting from a person')
    }
}

console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])


for(let property in person) {
    console.log(`${property}: ${person[property]}`)
}


const arr = ['1', '2', '3']
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


