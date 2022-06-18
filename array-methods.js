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


//11) includes()
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.includes("Mango"));

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.includes("xxxxxx", 3));


// 12) indexOf()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
let index2 = fruits.indexOf("Apple", 3);
console.log(index, index2)


// 13) isArray()
const fru = ["Banana", "Orange", "Apple", "Mango"];
let result2 = Array.isArray(fru);
console.log(result2)


// 14) join()
const fru2 = ["Banana", "Orange", "Apple", "Mango"];
let text2 = fru.join();
let text3 = fru.join(' + ');
console.log(text3)



// 15) keys()
const fruits_2 = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits_2.keys();
const keys = Object.keys(fruits_2);

let text_2 = "";
for (let x of keys) {
  text_2 += x + ">";
  console.log(text_2)
}


// 16) lastIndexOf()
const fruits_3 = ["Orange", "Apple", "Orange", "Apple", "Mango", "Apple2", "Mango"];
let index_2 = fruits_3.lastIndexOf("Apple");
console.log(index_2)


// 17) length
const fruits_4 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits_4.length;

// const fruits_4 = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits_4.length = 2;
console.log(length)


// 18) map()
const numbers = [4, 9.4, 16, 25];
//const newArr = numbers.map(Math.sqrt)
const newArr = numbers.map(Math.round)
console.log(newArr)

const numbers2 = [65, 44, 12, 4];
//const newArr2 = numbers2.map(myFunction)
const newArr2 = numbers2.map(x => x * 2)
console.log(newArr2)

function myFunction(num) {
  return num * 10;
}

console.log(myFunction(10))



// 19) pop()
const fruits_5 = ["Banana", "Orange", "Apple", "Mango"];
fruits_5.pop();

console.log(fruits_5)


// 20) prototype
Array.prototype.myUseCase = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
var fruits_6 = ["Banana", "Orange", "Apple", "Mango"];
fruits_6.myUseCase();
console.log(fruits_6)


// 21) push()
const fruits_7 = ["Banana", "Orange", "Apple", "Mango"];
//fruits_7.push("Kiwi");
fruits_7.push("Kiwi", "Lemon");
console.log(fruits_7)


// 22) reduce()
const numbers_2 = [175, 50, 25];

let f = numbers_2.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}


const numbers_8 = [15.5, 2.3, 1.1, 4.7];

let f2 = numbers_8.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}

// console.log(f)
console.log(f2)



// 23) reduceRight() 
const numbers_9 = [175, 50, 25];

let f3 = numbers_9.reduceRight(myFunc2);

function myFunc2(total2, num2) {
  return total2 - num2;
}


const numbers_10 = [2, 45, 30, 100];
let f4 = numbers_10.reduceRight(getSum2);

function getSum2(total3, num3) {
  return total3 - num3;
}

// console.log(f3)
console.log(f4)


// 24) reverse() 
console.log('================================================') 
const fruits_11 = ["Banana", "Orange", "Apple", "Mango"];
fruits_11.reverse();
console.log(fruits_11)


