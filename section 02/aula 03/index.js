function getPeriodo(hora) {
  if (hora < 6)
    return "madrugada";
  if (hora < 12)
    return "manhã";
  if (hora < 18)
    return "tarde";

  return "noite";
}

function main() {
  const data = new Date();
  const hora = data.getHours();
  const nome = "Smith";
  const periodo = getPeriodo(hora);

  const template = `
    Meu nome é "${nome}. Estou aprendendo JavaScript às ${hora} da ${periodo}.
  `;

  console.log(template.trim());
}

main();