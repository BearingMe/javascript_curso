// função construtora -> objetos
// função fábrica -> objetos

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.dizNomeCompleto = function () {
    console.log(`${this.nome} ${this.sobrenome}`);
  };
}

// new cria um novo objeto e executa o construtor
const p1 = new Pessoa("jose", "silva");
const p2 = new Pessoa("maria", "souza");

console.log(p1);
console.log(p2);

p1.dizNomeCompleto();
p2.dizNomeCompleto();