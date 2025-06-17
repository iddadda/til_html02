function fnA() {
  return new Promise((resoleve, reject) => {
    setTimeout(() => {
      console.log("A");
      resoleve("B");
    }, 3000);
  });
}
function fnB(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(item);
      resolve("C");
    }, 2000);
  });
}
function fnC(item) {
  setTimeout(() => {
    console.log(item);
  }, 1000);
}

fnA()
  .then((item) => fnB(item))
  .then((item) => fnC(item));
