console.error("Erro");
console.warn("Aviso");
console.debug("Debug");
console.log("Log");
console.table({ nome: "João", idade: 25 });
console.count("Contador");
console.assert(1 === 2, "Não é igual");

console.group("simple");
console.warn("warning!");
console.error("error here");
console.log("vivi vini vici");
console.groupEnd("simple");
console.log("new section");

const spacing = "10px";
const styles = `padding: ${spacing}; background-color: white; color: green; font-style:
       italic; border: 1px solid black; font-size: 2em;`;
console.log("%cGeeks for Geeks", styles);

console.trace();