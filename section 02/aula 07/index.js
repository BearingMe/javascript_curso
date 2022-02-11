// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não podemos criar constantes com números
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Não podemos redeclarar uma constante
// Nunca utilize var, use const 

const nome = "Henrique";

// é possível somar constantes
const primeiroNumero = 1;
const segundoNumero = 2;

const soma = primeiroNumero + segundoNumero;
const somaDuasVezes = soma * 2;
console.log(soma);

// saber o tipo
console.log(typeof(nome));

// o comportamendo de string é diferente de number
const string1 = "1";
const string2 = "2";

const number1 = 1;
const number2 = 2;

const concat = string1 + string2;
const sum = number1 + number2;

console.log(typeof concat, concat);
console.log(typeof sum, sum);