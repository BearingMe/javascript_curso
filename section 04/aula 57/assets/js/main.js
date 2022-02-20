class Write {
  constructor(screen) {
    this.screen = screen;
    this.value = "";
  }

  // atualiza o valor na tela
  update(value) {
    this.screen.value = value;
  }

  evaluate(value) {
    try {
      this.value = eval(value).toString();
      this.update(this.value);
    }
    catch (e) {
      this.value = "";
      this.update("Error");
    }
  }

  // adiciona um digito na tela
  add(value) {
    this.value == 0
      ? this.value = value
      : this.value += value;

    this.update(this.value);
  }

  // limpa a tela
  clear() {
    this.value = "";
    this.update(this.value);
  }

  // remove o ultimo digito da tela
  clearLast() {
    this.value = this.value.slice(0, -1);

    this.value == ""
      ? this.clear()
      : this.update(this.value);
  }
}

const screen = document.querySelector(".screen input");
const write = new Write(screen);

const buttonMap = [
  ["C", "(", ")", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  [".", "0", "<", "="],
]

function buttonFactory(write, value) {
  const button = document.createElement('button');
  button.innerText = value;

  button.addEventListener('click', () => {
    if (value === "=") {
      write.evaluate(write.value);
      return;
    }
    if (value === "<") {
      write.clearLast();
      return;
    }
    if (value === "C") {
      write.clear();
      return;
    }
    if (typeof value === "string") {
      write.add(value);
      return;
    }
  });

  return button;
}

const buttonGroup = document.querySelector('.button-group');

buttonMap.forEach((row, rowIndex) => {
  row.forEach((value, columnIndex) => {
    const button = buttonFactory(write, value);
    buttonGroup.appendChild(button);
  });
});