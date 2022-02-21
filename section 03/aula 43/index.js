// escreva uma função que recebe um número e
// retorna o seguinte:
// dividido por 3 = fizz
// dividido por 5 = buzz
// dividido por 3 e 5 = fizzbuzz
// não dividido por 3 ou 5 = o número
// checar se o número realmente é um número
// user função com números de 0 a 100

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }

  if (num % 3 === 0) {
    return "fizz";
  }

  if (num % 5 === 0) {
    return "buzz";
  }

  return num;
}

function checkNumber(num) {
  if (typeof num !== "number") {
    throw new Error("O número precisa ser um número");
  }
}

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => idx + start);
}

function main() {
  for (let i of range(0, 100)) {
    checkNumber(i);

    const result = fizzBuzz(i);
    console.log(result);
  }
}

main();
