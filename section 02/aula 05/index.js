console.log("Hello World");
console.log("Esse trecho será exibido no console do navegador");

window.onload = function () {
  const app = document.querySelector("#app");
  
  const h1 = document.createElement("h1");
  h1.textContent = "Hello World";

  app.appendChild(h1);
} 