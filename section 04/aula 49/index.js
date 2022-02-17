// declaração de funções
falaOi();
`nesse tipo de declaração ocorre o hoisting, ou seja, a função falaOi() é levada para o topo do arquivo durante a execução do código`;
function falaOi() {
  console.log("Oi");
}

// atribuição na variável
`funções são objetos de primeira classe, ou seja, podem ser atribuídas a uma variável`;
const falaOlá = function () {
  console.log("Olá");
};

falaOlá();

// callback
`funções também podem ser atribuídas a uma variável, e então chamadas posteriormente dentro de outra função`;
const souUmDado = function (falaDado) {
  falaDado();
};

souUmDado(function () {
  console.log("Sou um dado");
});

// arrow function
const souUmDado2 = (falaDado) => {
  console.log("Sou outro dado");
}

souUmDado2();