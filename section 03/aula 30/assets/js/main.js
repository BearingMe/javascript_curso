function getWeekDayName(date) {
  const weekday = date.getDay();

  switch (weekday) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
    default:
      return null;
  }
}

function getMonthName(date) {
  const month = date.getMonth();

  const monthnames = [
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

  return monthnames[month] || null;
}

function startZero(number) {
  return number < 10 ? `0${number}` : number;
}

function parseDate(date) {
  const weekday = getWeekDayName(date);
  const month = getMonthName(date);
  const year = date.getFullYear();

  let monthday = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  monthday = startZero(monthday);
  hour = startZero(hour);
  minutes = startZero(minutes);

  return `${weekday}, ${monthday} de ${month} de ${year} às ${hour}:${minutes}`;
}

function main() {
  const date = new Date();
  const dateTemplate = parseDate(date);

  const content = document.querySelector("#content");
  content.innerHTML += dateTemplate;
}

main();
