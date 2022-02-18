function randint(min = 500, max = 2000) {
  const num = Math.random() * (max - min) + min;

  return Math.floor(num);
}

function f1(cb) {
  setTimeout(() => {
    console.log("f1");
    cb && cb();
  }, randint());
}

function f2(cb) {
  setTimeout(() => {
    console.log("f2");
    cb && cb();
  }, randint());
}

function f3(cb) {
  setTimeout(() => {
    console.log("f3");
    cb && cb();
  }, randint());
}

f1(function () {
  f2(function () {
    f3(function () {
      f2(function () {
        f1(function () {
          console.log("fim");
        });
      });
    });
  });
});
