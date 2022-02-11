// operatodes aritmeticos
const num1 = 5;
const num2 = 10;

const adição = num1 + num2;
const subtração = num1 - num2;
const multiplicação = num1 * num2;
const divisão = num1 / num2;
const potênciacao = num1 ** num2;
const resto = num1 % num2;

console.log(`${num1} + ${num2} = ${adição}`);
console.log(`${num1} - ${num2} = ${subtração}`);
console.log(`${num1} * ${num2} = ${multiplicação}`);
console.log(`${num1} / ${num2} = ${divisão}`);
console.log(`${num1} ** ${num2} = ${potênciacao}`);

`o resto de uma divisão é o que sobra da divisão inteira
no caso de 5%10, o resto é 5, pois 5 não é divisível por 10`;

console.log(`${num1} % ${num2} = ${resto}`);

`ordem de precedência: () ** % / * + -`;

// operadores de incremento e decremento
let num = 10;

num++; // num = num + 1
console.log(num); // 11

num--; // num = num - 1
console.log(num); // 10

`o operador postfix é utilizado quando queremos aplicar um operador após o valor da variável
o operador prefix é utilizado quando queremos aplicar um operador antes do valor da variável` 

// incrementa o número, então mostra
console.log(++num); // 11

// mostra o número, então incrementa
console.log(num++); // 11

// valor atual da variável = 12

`é possível incrementar e somar o valor da variável com um número`
let num3 = 10;
num3 += 5; // num3 = num3 + 5

`também é possivel multiplicar`
let num4 = 10;
num4 *= 2; // num4 = num4 * 2


