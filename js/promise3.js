const p = new Promise((resoleve, reject) => {
  setTimeout(() => {
    console.log("A");
    resoleve("B");
  }, 3000);
});

p.then((item) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(item);
      resolve("C");
    }, 2000);
  });
}).then((item) => {
  setTimeout(() => {
    console.log(item);
  }, 1000);
});
