let a = "A";
let b = "B";
let c = "C";

// desestruturação
[a, b, c] = [1, 2, 3];

console.log(a, b, c);

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// não é necessário pegarmos o último elemento
console.log(first, second, rest);

// espaços vazios não são considerados
const [one, , three] = numbers;
console.log(one, three);