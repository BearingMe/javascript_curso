// 25 de fevereiro de 1990
// o começa em zero
const date1 = new Date(1990, 1, 25);
console.log(date1);

// 23 de setembro de 1998
const date2 = new Date("1998-09-23");
console.log(date2.toLocaleDateString("pt-BR"));

// 08 de fevereiro de 2022
const date3 = new Date();

const weekday = date3.getDay(); // 2
const monthday = date3.getDate(); // 8
const month = date3.getMonth(); // 1
const year = date3.getFullYear(); // 2022
const hour = date3.getHours(); // 8
const minutes = date3.getMinutes(); // 46
const seconds = date3.getSeconds(); // 11
const miliseconds = date3.getMilliseconds(); // 71

`Parece não existir problemas quanto aos valores da hora`;
`O getDay é o da semana, começando em 0 (domingo)`;
`O getDate é o dia do mês, começando em 1`;
`O getMonth é o mês, começando em 0 (janeiro)`;
console.log("Dia da semana: ", weekday);
console.log("Dia do mês: ", monthday);
console.log("Mês: ", month);
console.log("Ano: ", year);
console.log("Hora: ", hour);
console.log("Minutos: ", minutes);
console.log("Segundos: ", seconds);
console.log("Milisegundos: ", miliseconds);
