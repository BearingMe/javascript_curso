function calcIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

function calcObsidadeNivel(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  }

  if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  }

  if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  }

  if (imc >= 30 && imc <= 34.9) {
    return "Obesidade grau I";
  }

  if (imc >= 35 && imc <= 39.9) {
    return "Obesidade grau II";
  }

  if (imc >= 40) {
    return "Obesidade grau III";
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let peso = document.querySelector("#peso").value;
  let altura = document.querySelector("#altura").value;

  if (!peso || !altura) {
    alert("Preencha todos os campos");
    return;
  }

  peso = parseFloat(peso.replace(",", "."));
  altura = parseFloat(altura.replace(",", "."));

  let imc = calcIMC(peso, altura);

  if (isNaN(imc)) {
    alert("Preencha todos os campos corretamente");
    return;
  }

  const obsidadeNivel = calcObsidadeNivel(imc);

  imc = imc.toFixed(2).replace(".", ",");

  const template = `
    <div>
      <small>Seu IMC é ${imc}.</small>
      <small>Você está em <b>${obsidadeNivel}</b></small>
    </div>
  `;

  document.querySelector("#resultado").innerHTML = template;
});
