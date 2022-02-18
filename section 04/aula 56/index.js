function createPerson(name, surname, age) {
  return {
    name,
    surname,
    greet() {
      // acessa por estar dentro do escopo
      // não pode ver o que está abaixo
      console.log(`Hello, my name is ${name}`);
    },
    showAge() {
      // acessa por estar a partir do this (createPerson)
      // pode ver o que está abaixo por causa disso
      console.log(`I am ${this.age} years old`);
    },
    age,
  };
}

const p1 = createPerson("João", "Silva", 20);
p1.greet();
p1.showAge();
