const sonkha = [2, 4, 6, 8];

const sonkhaDouble = [];

for (const num of sonkha){
    // console.log(num);
    const mun = num*2
    // console.log(mun);
    sonkhaDouble.push(mun)
}

// console.log(...sonkhaDouble)


const numbers = [2, 4, 6, 8];

// function doubleIt(num){
//     console.log('num now', num)
//     return num*2;
// }

// const result = numbers.map(doubleIt)
// console.log(result);

// function doubleIt(num){
//     console.log('num of num', num);
//     return num*2;
// }

// const result = numbers.map(doubleIt)
// console.log(result)

// function doubleIt(num){
//     console.log('num of num', num);
//     return num*2;
// }

// const result = numbers.map(doubleIt)
// console.log(result);

function doubleIt(num){
    console.log("num of num", num);
    return num*2;
}

const result = numberso.map(doubleIt)
console.log(result);
const numberso = [2, 4, 6, 8, 10];

const double = numbers.map(num => num * num);
console.log(double)
const bonus = double.map(x => x + 5)
console.log(bonus);
const bonus2 = numbers.map(num => num+5)
console.log(bonus)

const numberos = [1, 2, 3, 4, 5, 6];
const resulot = numberos.forEach(n => console.log(n);)