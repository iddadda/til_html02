// map
const arr = [11, 32, 7, 19, 40, 56];
const mapArr = arr.map((item) => item + 1);

console.log("arr: ", arr);
console.log("mapArr: ", mapArr);
console.log(arr === mapArr);

// 유사배열
const myArr = {
  0: 11,
  1: 32,
  2: 7,
  3: 19,
  4: 40,
  5: 56,
  length: 6,
  forEach: function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  },
  map: function (cb) {
    const temp = new Array(this.length);
    for (let i = 0; i < this.length; i++) {
      temp[i] = cb(this[i], i);
    }
    return temp;
  },
};
const myMapArr = myArr.map((item) => item + 1);
console.log(myMapArr);
