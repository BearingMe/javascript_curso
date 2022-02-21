// escreva uma função chamada ePaisagem
// recebe altura e largura
// retorna true se for paisagem

function ePaisagem1(altura, largura) {
  if (largura > altura) {
    return true;
  } else {
    return false;
  }
}

function ePaisagem2(altura, largura) {
  if (largura > altura) {
    return true;
  }

  return false;
}

function ePaisagem3(altura, largura) {
  return largura > altura ? true : false;
}

function ePaisagem4(altura, largura) {
  return largura > altura;
}

const ePaisagem5 = (altura, largura) => largura > altura;

function main() {
  const altura = 10;
  const largura = 9;

  r1 = ePaisagem1(altura, largura);
  r2 = ePaisagem2(altura, largura);
  r3 = ePaisagem3(altura, largura);
  r4 = ePaisagem4(altura, largura);
  r5 = ePaisagem5(altura, largura);

  console.log(r1, r2, r3, r4, r5);
}

main();
