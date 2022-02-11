function getAge(day, month, year) {
  const birth = new Date(year, month - 1, day);
  const today = new Date();

  const timestamp = today.getTime() - birth.getTime();
  const age = new Date(timestamp).getFullYear() - 1970;

  return age;
}

function getImc(weight, height) {
  let imc = weight / (height * height);
  imc = imc.toFixed(2);

  return imc;
}

function getWeight(height) {
  const imc = 18.5;

  let weight = imc * (height * height);
  weight = weight.toFixed(2);

  return weight;
}

const nome = "Bruno";
const sobrenome = "Smith";
const idade = getAge(23, 09, 1998);
const peso = 73;
const altura = 1.63;

const imc = getImc(peso, altura);
const pesoIdeal = getWeight(altura);

const diff = Math.abs(peso - pesoIdeal);

const template1 = `${nome} ${sobrenome} tem ${idade} anos e seu IMC é ${imc}`;
console.log(template1);

const template2 = `Seu peso ideal é ${pesoIdeal}, estando ${diff}kg fora do esperado`;
console.log(template2);
