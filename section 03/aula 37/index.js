const nomes = ["João", "Maria", "Pedro", "Ana", "José"];

console.log("\n##########################################\n");

// for clássico
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("\n##########################################\n");

// le o indice de cada array
for (let i in nomes) {
  console.log(nomes[i]);
}

console.log("\n##########################################\n");

// le o valor de cada array
for (let v of nomes) {
  console.log(v);
}

console.log("\n##########################################\n");

nomes.forEach((valor, indice) => {
  console.log(valor);
});

console.log("\n##########################################\n");

// for of não itera Object naturalmente
const pessoa = {
  nome: "Pedro",
  sobrenome: "Silva",
  idade: 20
};

for (let [key, value] of Object.entries(pessoa)) {
  console.log(key, value);
}