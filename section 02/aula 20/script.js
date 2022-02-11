const form = document.querySelector("form");
const data = [];

form.onsubmit = function (event) {
  event.preventDefault();

  const name = form.querySelector("#name").value;
  const surname = form.querySelector("#surname").value;
  const weight = form.querySelector("#weight").value;
  const height = form.querySelector("#height").value;

  data.push({ name, surname, weight, height });
  console.log(data);
};
