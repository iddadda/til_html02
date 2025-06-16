// reduce
const arr = [11, 32, 7, 19, 40, 56, 57];
const result = arr.reduce((prev, next) => {
  console.log("prev: ", prev, ", next: ", next);
  return prev + next;
});

console.log("result: ", result);
console.log("----------------");

const result2 = arr.reduce((prev, next) => {
  console.log("prev: ", prev, ", next: ", next);
  return prev + next;
}, 0);

console.log("result2: ", result2);
