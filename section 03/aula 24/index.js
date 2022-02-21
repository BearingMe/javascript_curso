function greeting1(hour) {
  if (hour <= 6) {
    console.log("Vai dormir, corno!");
  } else if (hour <= 12) {
    console.log("Bom dia!");
  } else if (hour <= 18) {
    console.log("Boa tarde!");
  } else if (hour <= 24) {
    console.log("Boa noite!");
  } else {
    console.log("Hora inválida!");
  }
}

function greeting2(hour) {
  if (hour <= 6) {
    console.log("Vai dormir, corno!");
    return;
  }

  if (hour <= 12) {
    console.log("Bom dia!");
    return;
  }

  if (hour <= 18) {
    console.log("Boa tarde!");
    return;
  }

  if (hour <= 24) {
    console.log("Boa noite!");
    return;
  }

  console.log("Hora inválida!");
  return;
}

const date = new Date();
const hour = date.getHours();

greeting1(hour);
greeting2(hour);
