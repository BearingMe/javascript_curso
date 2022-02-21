/**
 * Operadores de comparação
 * > maior que
 * < menor que
 * >= maior ou igual
 * <= menor ou igual
 * == igual
 * === igual e do mesmo tipo
 * != diferente
 * !== diferente e do mesmo tipo
 * && e
 * || ou
 * ! negação
*/

// Exemplo 1
`5 é maior que 4? true`
console.log(5 > 4); // true

// Exemplo 2
`5 é menor que 4? false`
console.log(5 < 4); // false

// Exemplo 3
`5 é maior ou igual a 4? true`
console.log(5 >= 4); // true

// Exemplo 4
`5 é menor ou igual a 5? true`
console.log(5 <= 5); // true

// Exemplo 5
`5 é igual a 5 indepentende do tipo? true`
console.log(5 == '5'); // true

// Exemplo 6
`5 é igual a 5? true`
console.log(5 === '5'); // false

// Exemplo 7
`5 é diferente de 4 indepentente do tipo? true`
console.log(5 != 4); // true

// Exemplo 8
`5 é diferente de 4? true`
console.log(5 !== 4); // true

// Exemplo 9
`5 é maior que 4? true`
`5 é menor que 10? true`
`true ou true = true`
console.log(5 > 4 && 5 < 10); // true

// EXemplo 10
`5 é maior que 4? true`
`5 é menor que 10? true`
`true ou true = true`
console.log(5 > 4 || 5 < 10); // true