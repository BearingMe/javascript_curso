const date = new Date();
const weekday = date.getDay();

let dayname;
switch (weekday) {
  case 0:
    dayname = "Domingo";
    break;
  case 1:
    dayname = "Segunda-feira";
    break;
  case 2:
    dayname = "Terça-feira";
    break;
  case 3:
    dayname = "Quarta-feira";
    break;
  case 4:
    dayname = "Quinta-feira";
    break;
  case 5:
    dayname = "Sexta-feira";
    break;
  case 6:
    dayname = "Sábado";
    break;
  default:
    dayname = null;
    break;
}

console.log(dayname);

const month = date.getMonth();

let monthnames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let monthname = monthnames[month] || null;

console.log(monthname);