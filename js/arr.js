const arr = [10, 20, 30, 40, 55];

arr.forEach(function (item, idx) {
  console.log(`item: ${item}, idx: ${idx}`);
});

// forEach를 이용하여 arr의 모든 값을 더한 결과값을 구하시오
let sum = 0;
arr.forEach((item) => (sum += item));
console.log(sum);

// 유사배열 생성
const myArr = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
  4: 50,
  length: 5,
  forEach: function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  },
};
console.log("my-length:", myArr.length);
myArr.forEach(function (item, idx) {
  console.log(`item: ${item}, idx: ${idx}`);
});
