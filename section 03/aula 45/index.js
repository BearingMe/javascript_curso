function getHour() {
  if (!(date instanceof Date)) {
    throw TypeError("A data precisa ser uma instância de Date");
  }

  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

const date = new Date();
const hour = getHour(date);
console.log(hour);
