{
  let nome = "John"; // escopo de bloco
  var sobrenome = "Doe"; // escopo de função
  console.log(nome, sobrenome);

  {
    let nome = "Jane"; // escopo de bloco
    var sobrenome = "Williams"; // escopo de função
    console.log(nome, sobrenome);

    {
      let nome = "Joana"; // escopo de bloco
      var sobrenome = "Miller"; // escopo de função
      console.log(nome, sobrenome);
    }

    console.log(nome, sobrenome);
  }

  console.log(nome, sobrenome);
}

console.log(outroNome);
var outroNome = "João"; // hoisting

console.log(umaFunção);

function umaFunção() {} // hoisting
