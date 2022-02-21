const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosDobro = numeros.map((numero) => numero * 2);
console.log(numerosDobro);

const pessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Maria", idade: 25 },
  { nome: "Fernanda", idade: 15 },
  { nome: "Luiza", idade: 30 },
];

const nomes = pessoas.map((pessoa) => ({ nome: pessoa.nome }));
console.log(nomes);

const ids = pessoas.map((pessoa, index) => ({
  id: index,
  ...pessoa,
}));
console.log(ids);
