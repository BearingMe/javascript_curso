const nome01 = "João";
const idade01 = 20;
const sexo01 = "M";

const nome02 = "Maria";
const idade02 = 25;
const sexo02 = "F";

const pessoa01 = {
  nome: "João",
  idade: 20,
  sexo: "M",
};

const pessoa02 = {
  nome: "Maria",
  idade: 25,
  sexo: "F",
};

console.log(pessoa01.nome === nome01);
console.log(pessoa01.idade === idade01);
console.log(pessoa01.sexo === sexo01);

/////////////////////////////////

const criaPessoa = (nome, idade, sexo) => ({ nome, idade, sexo });

const pessoa03 = criaPessoa("João", 20, "M");
const pessoa04 = criaPessoa("Maria", 25, "F");

console.log(pessoa03, pessoa04);

/////////////////////////////////

const pessoa05 = {
  nome: "João",
  idade: 20,
  sexo: "M",
  fala() {
    console.log(`Olá, me chamo ${this.nome}`);
  },
};

pessoa05.fala();
