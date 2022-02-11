let num1;

num1 = 9.65465465;

// arredondar para cima
let up = Math.ceil(num1);
console.log(up);

// arredondar para baixo
let down = Math.floor(num1);
console.log(down);

// arredondar para o mais
let round = Math.round(num1);
console.log(round);

// maior número
let max = Math.max(num1, 10, 20, 30, 40, 50);
console.log(max);

// menor número
let min = Math.min(num1, 10, 20, 30, 40, 50);
console.log(min);

// aleatório
let random = Math.random();
console.log(random);

// aleatório entre 5 e 10
let random2 = Math.random() * (10 - 5) + 5;
console.log(random2);

// raiz quadrada
let raiz = Math.sqrt(num1);
console.log(raiz);

// pi
let pi = Math.PI;
console.log(pi);

// potencia
let potencia = Math.pow(num1, 2);
console.log(potencia);

// absoluto
let abs = Math.abs(num1);
console.log(abs);

while (!!(100 / 0)) {
  console.log("wtf");
}
