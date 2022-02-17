function fn1() {
  console.log("Olá");

  // existe apenas em uma função declarada com function
  console.log(arguments);
}

function fn2(a, b, c) {
  const args = Array.from(arguments);
  const total = args.reduce((acc, cur) => acc + cur);

  console.log(total, a, b, c);
}

fn1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
fn2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function fn3(a, b) {
  b = b || 0;

  console.log(a + b);
}

function fn4(a, b = 2, c = 4) {
  console.log(a + b + c);
}

fn4(2, "", 20); // 220
fn4(0, null, 20); // 20
fn4(2, undefined, 20); // 22

function fn5(a, b = 2, ...c) {
  console.log(Array.isArray(c));
  console.log(a + b + c);
}

fn5(2, 3, 4, 5, 6, 7, 8, 9, 10);
