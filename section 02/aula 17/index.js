`função sem retorno`
// cria a função
function hello(name) {
  const template = `Hello ${name}!`;
  console.log(template);
}

// executa a função
hello("Smith");
hello("John");
hello("Jane");


`função com retorno`
// cria a função
function bye(name) {
  const template = `Bye ${name}!`;

  return template;
}

// chama a função em uma variável
const byeSmith = bye("Smith");
console.log(byeSmith);


`função de soma`
function soma(a, b) {
  const r = a + b;
  
  return r;
}

// chamada direito no console
console.log(soma(2, 3));
console.log(soma(15, 1));


`função anônima`
// cria a função
const sub = function(a, b) {
  const r = a - b;
  
  return r;
}

console.log(sub(10, 5));


`arrow function`
// cria a função
const mult = (a, b) => {
  const r = a * b;
  
  return r;
}

// retorno em um único linha
const div = (a, b) => a / b

console.log(mult(10, 5));