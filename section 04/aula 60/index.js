function count(min, max) {
  if (min < 0) {
    throw new Error("min range must be greater than 0");
  }

  if (max >= 1000) {
    throw new Error("max range must be less than 1000");
  }

  if (min > max) {
    return;
  }

  const counter = min;

  console.log(counter);

  count(counter + 1, max);
}

count(1, 10);
