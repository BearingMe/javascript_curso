// escreva uma função que receba dois números e retorne o maior deles

function maior1(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function maior2(a, b) {
  if (a > b) {
    return a;
  }

  return b;
}

function maior3(a, b) {
  return a > b ? a : b;
}

function maior4(a, b) {
  return Math.max(a, b);
}

const maior5 = (a, b) => (a > b ? a : b);

function main() {
  const a = Math.PI;
  const b = Math.E;

  r1 = maior1(a, b);
  r2 = maior2(a, b);
  r3 = maior3(a, b);
  r4 = maior4(a, b);
  r5 = maior5(a, b);

  console.log(r1, r2, r3, r4, r5);
}

main();
