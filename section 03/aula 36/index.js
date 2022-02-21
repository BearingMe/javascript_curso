const frutas = ["Banana", "Maçã", "Uva", "Morango"];

// for loop clássico
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// le o indice de cada array
for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: "Pedro",
  sobrenome: "Silva",
  idade: 20
};

for (let k in pessoa) {
  console.log(k, pessoa[k]);
}