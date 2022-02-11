/**
 * Primitivos [imutáveis]
 * - string
 * - number
 * - boolean
 * - null
 * - undefined
 * - symbol
*/

`string são imutáveis`

const nome = 'João';
nome[0] = 'M'; // não é possível alterar o valor de uma string

console.log(nome);


`seu valores são completamente copiados`
let a = "A"
let b = a
b = "B"

console.log(a, b); // A B


/**
 * Objetos [mutáveis]
 * - array
*/

`array são mutáveis`

const array1 = [1, 2, 3];
array1[0] = 4;

console.log(array1);


`seus valores são referenciados`
let arrayA = [1, 2, 3];
let arrayB = arrayA;
arrayB[0] = 4;

console.log(arrayA, arrayB); // [4, 2, 3] [4, 2, 3]