function* idMaker() {
  let index = 0;
  while (index < 10) {
    yield index++;
  }
}

const gen = idMaker();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

for (let value of gen) {
  console.log(value);
}

function* idMaker2() {
  yield* idMaker();
  yield* [1, 2, 3];
}

const gen2 = idMaker2();

for (let value of gen2) {
  console.log(value);
}