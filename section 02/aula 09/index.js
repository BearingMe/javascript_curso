`nunca usar var`

// possivel redeclarar a var
var nome = "Henrique";
var nome = "Maria";
var nome = "Eduardo";

console.log(nome);

// é possível declarar variaveis sem var, let e const
idade = 23;
console.log(idade);

// tipos primitivos
const nome1 = "Henrique"; // string -> cadeia de caracteres
const nome2 = "Maria"; // string -> cadeia de caracteres
const nome3 = "Eduardo"; // string -> cadeia de caracteres

const num1 = 1; // number -> número real
const num2 = 2; // number -> número real
const num3 = 3; // number -> número real

const bool1 = true; // boolean -> true ou false
const bool2 = false; // boolean -> true ou false

`a diferença entre undefined e null é que undefined é uma variável declarada mas não inicializada e null é uma variável declarada e inicializada como nulo`;

let und; // undefined -> não definido
const nul = null; // null -> nulo

`para ver o tipo de qualquer variável, utilizamos typeof`;

typeof nome1; // string
typeof nome2; // string
typeof nome3; // string
typeof num1; // number
typeof num2; // number
typeof num3; // number
typeof bool1; // boolean
typeof bool2; // boolean
typeof und; // undefined
typeof nul; // null

`os dados primitivos são strings, numbers, booleans, undefined e null`;