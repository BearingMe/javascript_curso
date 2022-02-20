const display = document.querySelector(".screen input");
const buttonGroup = document.querySelector(".button-group");

const displayHandler = new DisplayHandler(display);
const buttonHandler = new ButtonHandler(displayHandler, eventsHandler);

// prettier-ignore
const buttonValues = [
  "C", "(", ")", "/", 
  "7", "8", "9", "*", 
  "4", "5", "6", "-",  
  "1", "2", "3", "+", 
  ".", "0", "<", "=", 
];

const buttons = buttonValues.map((value) => buttonHandler.create(value));
buttons.forEach((button) => buttonGroup.appendChild(button));
