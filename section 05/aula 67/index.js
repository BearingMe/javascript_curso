const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// acc, elem, index, array
const soma = numeros.reduce((acc, numero) => acc + numero);
console.log(soma);

const parImpar = numeros.reduce(
  (acc, numero) => {
    if (numero % 2 === 0) {
      acc.par.push(numero);
    } else {
      acc.impar.push(numero);
    }
    return acc;
  },
  { par: [], impar: [] }
);

console.log(parImpar);

const pessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Maria", idade: 25 },
  { nome: "Fernanda", idade: 15 },
  { nome: "Luiza", idade: 30 },
];

const maisVelha = pessoas.reduce((acc, pessoa) => {
  if (acc.idade > pessoa.idade) return acc;
  return pessoa;
});
console.log(maisVelha);
