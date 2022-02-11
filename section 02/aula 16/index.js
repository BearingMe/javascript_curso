const alunos = ["Luiz", "Maria", "Pedro", "Ana", "João"];

console.log(alunos);

console.log(alunos[0]); // Luiz
console.log(alunos[1]); // Maria
console.log(alunos[2]); // Pedro
console.log(alunos[3]); // Ana
console.log(alunos[4]); // João

alunos[0] = "Carlos";
alunos[5] = "Luiza"; // adiciona um novo elemento no array pelo índice 5

const tamanho = alunos.length;
console.log(tamanho); // 7

`começo`
alunos.unshift("José"); // adiciona um novo elemento no início do array
alunos.shift(); // remove o primeiro elemento do array

`final`
alunos.push("Joana"); // adiciona um novo elemento no final do array
alunos.pop(); // remove o último elemento do array

`qualquer posição`
alunos.splice(2, 1); // remove o elemento do índice 2, com 1 elemento
delete alunos[2]; // remove o elemento do índice 2, deixando o índice vazio

`verificar se é array`
console.log(Array.isArray(alunos)); // true
console.log(alunos instanceof Array); // true