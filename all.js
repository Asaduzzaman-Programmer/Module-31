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

const result = numbers.map(doubleIt)
console.log(result);