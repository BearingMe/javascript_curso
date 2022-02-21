const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let n of numeros) {
  if (n % 2 === 0) {
    continue; // vai para a próxima iteração
  }

  console.log(n);
}

for (let n of numeros) {
  if (n > 5) {
    break; // vai para o final do laço
  }

  console.log(n);
}
