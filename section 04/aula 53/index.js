function returnFn(name) {
  return () => name;
}

const fn1 = returnFn("smith"); // closure é o escopo de uma função que acessa a variável de fora dela
const fn2 = returnFn("john");
const name1 = fn1();
const name2 = fn2();

console.log(name1);
console.log(name2);
