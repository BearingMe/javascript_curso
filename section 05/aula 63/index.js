// lista com seis nomes
const nomes = ["Pedro", "João", "Maria", "José", "Fernanda", "Luiza"];

// splice(indice, quantidade, elemento) -> elemnto é opcional e substitui o elemento que está no indice
const removido = nomes.splice(2, 1, "Sandra");
console.log(nomes);
console.log(removido);

// incluir sem remover
nomes.splice(2, 0, ...["Sandra"]);
console.log(nomes);

// simula o shift || funciona identico, porém retorna array
const shift = nomes.splice(0, 1);
console.log(shift)

// simula o unshift || funciona semelhante, porém substitui ao invés de adicionar
nomes.splice(0, 0, "Smith");
const unshift = nomes.length;
console.log(nomes);

// simula o push || funciona identico, 
// porém push retorna a quantidade de elementos adicionado, 
// enquanto o splice retorna o elemento em si
nomes.splice(nomes.length, 0, "John");
console.log(nomes);