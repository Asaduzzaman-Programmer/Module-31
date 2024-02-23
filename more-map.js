const numbers = [2, 4, 6, 8, 10];

const double = numbers.map(num => num * num);
console.log(double)
const bonus = double.map(x => x + 5)
console.log(bonus);
const bonus2 = numbers.map(num => num+5)
console.log(bonus)