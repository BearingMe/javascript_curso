function getTime(date) {
  if (!(date instanceof Date)) {
    throw TypeError("A data precisa ser uma instância de Date");
  }

  return date.toLocaleTimeString("pt-BR");
}

function teste1() {
  const timer = setInterval(() => {
    const date = new Date();
    const time = getTime(date);
    console.log(time);
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
  }, 3500);

  setTimeout(() => {
    console.log("Fim");
  }, 5000);
}

function teste2(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

teste2().then(console.log("Fim"));