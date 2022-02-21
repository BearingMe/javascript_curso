function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("Os dois parâmetros precisam ser números");
  }

  return x + y;
}

function main() {
  try {
    console.log(soma(1, 2));
    console.log(soma(1, "2"));
  }
  catch(err) {
    console.log(err.message);
  }
}

main()