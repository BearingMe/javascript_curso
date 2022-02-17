//////////////////////////////////////////////////////
function soma(a, b) {
  return a + b;
}

const s = soma(1, 2);
console.log(s);

//////////////////////////////////////////////////////
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

const p1 = criaPessoa("João", "Silva");
console.log(p1);

//////////////////////////////////////////////////////
function inicio(start) {
  function fim(end) {
    return end - start;
  }

  return fim;
}

const i = inicio(1);
const f = i(2);

console.log(f);

//////////////////////////////////////////////////////
function multiplica(a) {
  return function (b) {
    return a * b;
  };
}

const base = multiplica(2);
const r1 = base(1);
const r2 = base(2);
const r3 = base(3);

console.log(r1, r2, r3);
