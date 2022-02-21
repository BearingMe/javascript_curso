/**
 * Expressões de curto circuito
 * && e -> Assim que encontra false retorna o próprio false
 * || ou -> Uma das operações precisam ser true para retornar true
 * ! negação
 */

/**
 * Falsy
 * false
 * 0
 * ""
 * null
 * undefined
 * NaN
 */

`retorna o ultimo valor testado`;
`o teste acaba quando chegar no final ou no primeiro false`;
let teste1;

teste1 = true && false && true;
console.log(teste1); // false

teste1 = "John" && 0 && "Doe";
console.log(teste1); // 0

teste1 = "John" && "Doe";
console.log(teste1); // Doe

teste1 = "John" && "Jane" && "Doe";
console.log(teste1); // Doe

teste1 = "John" && "";
console.log(teste1); // ""

`retorna o ultimo valor testado`;
`o teste acaba quando chegar no final ou no primeiro verdadeiro`;

let teste2;

teste2 = true || false || true;
console.log(teste2); // true

teste2 = "John" || 0 || "Doe";
console.log(teste2); // John

teste2 = "John" || "Doe";
console.log(teste2); // John

teste2 = "John" || "Jane" || "Doe";
console.log(teste2); // John

teste2 = "John" || "";
console.log(teste2); // John
