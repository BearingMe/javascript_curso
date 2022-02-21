/** Operador ternário
 * ? = se
 * : = senão
 */

const nota = 5;

const passou1 = nota >= 7 ? "Aprovado" : "Reprovado";
const passou2 = nota >= 7 && "Aprovado" || "Reprovado";

console.log(passou1);
console.log(passou2);
