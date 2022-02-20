function DisplayHandler(element) {
  this.element = element;

  this.add = function (value) {
    this.element.value === "0"
      ? (this.element.value = value)
      : (this.element.value += value);
  };

  this.clear = function () {
    this.element.value = "0";
  };

  this.clearLast = function () {
    this.element.value = this.element.value.slice(0, -1);
  };

  this.evaluate = function () {
    this.element.value = eval(this.element.value);
  };
}

function ButtonHandler(displayHandler, eventsHandler) {
  this.displayHandler = displayHandler;

  this.create = function (innerText) {
    const button = document.createElement("button");
    button.innerText = innerText;

    button.onclick = () => eventsHandler.call(button, this.displayHandler);
    return button;
  };
}

function eventsHandler(write) {
  const value = this.innerText;

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
}