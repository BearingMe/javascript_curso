const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 20,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

// atribuição via desestruturação
const { nome } = pessoa;
console.log(nome);

// valor padrão
const { idade = 0 } = pessoa;
console.log(idade);   

// atribuição com nome diferente
const  { endereco: { logradouro: rua, numero } } = pessoa;
console.log(rua, numero);

// operador rest
const { sobrenome, ...resto } = pessoa;
console.log(sobrenome, resto);