function getBackgroundColorFrom(querySelector) {
  const elem = document.querySelector(querySelector);
  const style = getComputedStyle(elem);

  return style.backgroundColor;
}

function getAllParagraphsFrom(querySelector) {
  const elem = document.querySelector(querySelector);
  return elem.querySelectorAll("p");
}

function main() {
  const ps = getAllParagraphsFrom("#app");
  const color = getBackgroundColorFrom("body");

  ps.forEach(p => {
    p.style.backgroundColor = color
    p.style.color = "#fff"
  })
}

main();
