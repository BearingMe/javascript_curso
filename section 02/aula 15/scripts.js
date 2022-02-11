function calc(number) {
  const root = Math.sqrt(number);
  const isInt = Number.isInteger(number);
  const isNan = Number.isNaN(number);
  const below = Math.floor(number);
  const above = Math.ceil(number);
  const fixed = number.toFixed(2);

  return { number, root, isInt, isNan, below, above, fixed };
}

function createElement(results) {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerText = `Seu número é: ${results.number}`;
  p.innerHTML += `Raiz quadrada: ${results.root} <br>`;
  p.innerHTML += `É inteiro: ${results.isInt} <br>`;
  p.innerHTML += `É NaN: ${results.isNan} <br>`;
  p.innerHTML += `Arredondado para baixo: ${results.below} <br>`;
  p.innerHTML += `Arredondado para cima: ${results.above} <br>`;
  p.innerHTML += `Arredondado para duas casas decimais: ${results.fixed} <br>`;

  return { h1, p };
}

function main() {
  const app = document.getElementById("app");
  const number = Number(prompt("Digite um número: "));

  const results = calc(number);
  const elements = createElement(results);

  app.appendChild(elements.h1);
  app.appendChild(elements.p);
}

main();