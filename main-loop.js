let newArray = [2, 3, 4, 'Vah', 122] 

function arr() {
    newArray.forEach(element => {
        console.log(element)
    });
    
}
arr()

// function arr2(info) {
//     for (let i = 0; i < info.length; i++) {
//         console.log(info[i])
//     }

// }
// arr2(newArray)


while(1 === 1) {
    console.log('Yes')
    break
}

let myCondition = 10
while(myCondition <= 1, myCondition--) {
       console.log(myCondition)
}

// let text = "";
// let i = 0;
// do {
//   text += i + "<br>";
//   i++;
//   if (i === 4) {
//       break
//   }
//   console.log(text)
// }
// while (i < 5);


// let b = 10

// for (let i2 = 0; i2 <= b; i2--) {
//     console.log(i2)
// }



const person = {
    nam: 'Vah',
    age: 31, // if undefined
    languages: 'English'
}
// const {nam, age: personAge = 1991, languages} = person
// console.log(nam, personAge, languages)

for (let key in person) {
    console.log(key, person[key])
}
