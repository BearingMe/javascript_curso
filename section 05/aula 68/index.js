const pessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Maria", idade: 25 },
  { nome: "Fernanda", idade: 15 },
  { nome: "Luiza", idade: 30 },
];

const idades = pessoas.map((pessoa) => pessoa.idade);
const maiorQue18 = idades.filter((idade) => idade > 18);
const somaMaiorQue18 = maiorQue18.reduce((acc, idade) => acc + idade);

const somaMenorQue18 = pessoas
  .map((pessoa) => pessoa.idade)
  .filter((idade) => idade < 18)
  .reduce((acc, idade) => acc + idade);

console.log(somaMaiorQue18);
console.log(somaMenorQue18);
