function random(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

// testa, se verdadeiro, executa
function teste1() {
  let i = 0;

  while (i <= 10) {
    console.log(i);
    i++;
  }
}

// testa, se verdadeiro, executa
function teste2() {
  const nomes = ["Diego", "Gabriel", "Lucas"];

  let i = 0;

  while (i < nomes.length) {
    console.log(nomes[i]);
    i++;
  }
}

// testa, se verdadeiro, executa
function teste3() {
  const min = 1;
  const max = 50;

  let rn = random(min, max);

  while (rn !== 10) {
    rn = random(min, max);
    console.log(rn);
  }
}

// testa, se verdadeiro, executa
function teste3() {
  const min = 1;
  const max = 50;

  let rn = random(min, max);

  while (rn !== 10) {
    rn = random(min, max);
    console.log(rn);
  }
}

// executa, então testa, se verdadeiro, executa novamente
function teste4() {
  const min = 1;
  const max = 50;

  let rn = random(min, max);

  do {
    rn = random(min, max);
    console.log(rn);
  } while (rn !== 10); // mesmo false executa pelo menos uma vez
}

function teste5() {
  const min = 1;
  const max = 50;

  `por executar o código antes da condição, o valor não precisa ser declarado no início`;
  // let rn = random(min, max);

  do {
    rn = random(min, max);
    console.log(rn);
  } while (rn !== 10); // mesmo false executa pelo menos uma vez
}

teste1();
teste2();
teste3();
teste4();
teste5();
