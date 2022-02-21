// básico
function filterCb(item, index, array) {
  if (item < 20) {
    return true;
  }

  return false;
}

const numerosDesordenador = [
  5, 9, 1, 15, 16, 17, 18, 56, 7, 8, 2, 3, 4, 10, 11, 12, 13, 14, 19, 20,
];

const menoresQue20 = numerosDesordenador.filter(filterCb);

// simplificado
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter((numero) => numero % 2 === 0);
const impares = numeros.filter((numero) => numero % 2 !== 0);

console.log(pares);
console.log(impares);

// filter de objetos
const pessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Maria", idade: 25 },
  { nome: "Fernanda", idade: 15 },
  { nome: "Luiza", idade: 30 },
];

const pessoasMaioresQue20 = pessoas.filter((pessoa) => pessoa.idade > 20);
console.log(pessoasMaioresQue20);

const nomeTerminaComA = pessoas.filter((pessoa) => pessoa.nome.endsWith("a"));
console.log(nomeTerminaComA);
