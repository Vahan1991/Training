//CodeSignal 

//2
function solution(year) {
    // return Math.floor(year/100) + ((year%100) ? 1 : 0)
     return Math.ceil(year/100)
 }
 
 // console.log(solution(1905))
 console.log(solution(1700))
 
 
//3)
function solution(inputString) {
    return inputString === inputString.split('').reverse().join('');
}

console.log(solution('abac'))


//4)
function solution(inputArray) {
    // return Math.max(inputArray.length)
    let arr = inputArray;
    let p = -Infinity;
    let x = 0;
    let y = 0;
    for(let i=0; i < arr.length; i++){
        x = arr[i];
        y = arr[i+1];
        if(x * y > p) {
           p = x * y;
        }
    }
    return p;
}

let ar = solution([3, 6, -2, -5, 7, 3])

console.log(ar);


//5)
function solution(n) {
    if (n >= 10 ** 4 || n < 1) {
        return false
    }
    return (n**2+(n-1)**2)
}

console.log(solution(3))


//test-1)
function solution(a, l, r) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
      let bounded = false;
      for (let x = l; x <= r; x++) {
        if ((i + 1) * x == a[i]) {
          bounded = true;
          break;
        }
      }
      b.push(bounded);
    }
  
    return b;
  }
  
  console.log(solution([8, 5, 6, 16, 5], 1, 3));