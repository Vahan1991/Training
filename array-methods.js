// // 1) concat()
// const arr1 = ["Cecil", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);



// for (let i = 0; arr1.length, i < children.length; i++){
//     console.log(children[i])
// }


// // 2) copyWithin()
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// fruits.push('Yes!')
// const newFruits = fruits.copyWithin(0, 1);
// console.log(newFruits)


// 3) entries()
var tot_array = ['Tech','On','The','Net'];

var tot_iterator = tot_array.entries();

console.log(tot_iterator.next().value);
console.log(tot_iterator.next().value);
console.log(tot_iterator.next().value);
console.log(tot_iterator.next().value);



// // 4) every()
// const ages = [32, 33, 16, 40];
// console.log(typeof ages)

// ages.every(checkAge)

// function checkAge(age) {
//   return age > 18;
// }

// console.log(checkAge(17))


// // 5) fill()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
// console.log(fruits)

// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// fruits2.fill("Kiwi", 2, 4);
// console.log(fruits2)


// 6) filter()
const ages2 = [32, 33, 16, 40];
const result = ages2.filter(checkAdult);

function checkAdult(age2) {
    return age2 >= 18;
}
console.log(checkAdult(31))



// 7) find()
const arrays3 = [5, 12, 8, 130, 44];
let found
function checkAge() {
    found = arrays3.find(element => element > 200) || 'Not Found'
    return found;
}

console.log(checkAge())



// 8) findIndex()
const ages = [3, 10, 18, 20];

ages.findIndex(checkAge2);

function checkAge2(age) {
  return age >= 18;
}
console.log(checkAge2(18))


// 9) forEach()
let text = "";
const fruits2 = ["apple ", "orange ", "cherry "];
fruits2.forEach(myFunction1);

function myFunction1(item, index) {
    return text += index + " :" + item;
  }
console.log(myFunction1(3, 'banana'))

//10) from()
//let text2 = "ABCDEFG"
let Text2Arr = {a: 'al', b: 'bal'}, a2 = {'val': 'build', build: {
  built: {
    ul: 'textArr'
  }
 }, hob: {
   one: '1',
   two: '2',
   three: '3'
 }
}
const myArr = Array.from(Text2Arr.b);
console.log(myArr)

// console.log(Array.from('foo'));
// // expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], x => x + x));
// // expected output: Array [2, 4, 6]


console.log('================================================')
//11) includes()
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.includes("Mango"));

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.includes("xxxxxx", 3));



// // map()
// const numbers = [4, 9.4, 16, 25];
// //const newArr = numbers.map(Math.sqrt)
// const newArr = numbers.map(Math.round)
// console.log(newArr)

// const numbers2 = [65, 44, 12, 4];
// //const newArr2 = numbers2.map(myFunction)
// const newArr2 = numbers2.map(x => x * 2)
// console.log(newArr2)

// function myFunction(num) {
//   return num * 10;
// }

// console.log(myFunction(10))



