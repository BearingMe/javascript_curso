`arrays são elementos indexados`;
// indexados  // 0      // 1    // 2
const nomes = ["Pedro", "João", "Maria"];

// mudar o valor do indice 2
nomes[2] = "José";

// deletar o indice 2
nomes.splice(2, 1);

// é possivel criar array com construtor
const nomes2 = new Array("Pedro", "João", "Maria");

`arrays mantém dados por referência`;
// cópia por referencia
const nomes3 = nomes;

// alterar o valor do indice 2 em ambos os arrays
nomes3[0] = "José";
console.log(nomes2);

`shift desloca os elementos do array para a esquerda`;
// shift
const nomes4 = ["Pedro", "João", "Maria"];
const primeiroElemento = nomes4.shift();

`unshift desloca os elementos do array para a direita`;
// unshift
const nomes5 = ["Pedro", "João", "Maria"];
const tamanhoArray = nomes5.unshift("José");

console.log(nomes5);
console.log(tamanhoArray);

`shift e unshift deslocam todos os elementos do array sendo pesado para o processador`;

// pop -> desloca o ultimo elemento do array
// push -> adiciona um elemento no final do array
// shift -> desloca o primeiro elemento do array
// unshift -> adiciona um elemento no inicio do array

`split separa uma string em um array`;
// split
const nome = "Pedro Silva";
const nomes6 = nome.split(" ");

`join junta um array em uma string`;
// join
const nomes7 = ["Pedro", "João", "Maria"];
const nome8 = nomes7.join(" ");