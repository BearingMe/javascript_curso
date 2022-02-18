// funcão comum
function main() {
  console.log("função principal");
}

main();

// IIFE => immediately invoked function expression
(function (idade, peso, altura) {
  console.log("função principal");
  console.log(idade, peso, altura);
})(20, 80, 1.8);
