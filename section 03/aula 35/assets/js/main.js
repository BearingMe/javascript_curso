const elementos = [
  { tag: "p", texto: "Parágrafo" },
  { tag: "div", texto: "Divisão" },
  { tag: "span", texto: "Span" },
];

const app = document.querySelector("#app");

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  const elemento = document.createElement(tag);
  elemento.innerHTML = texto;
  app.appendChild(elemento);
}

