// filter

const arr = [11, 32, 7, 19, 40, 56, 57];
const filterArr = arr.filter((item) => item % 2 == 0);
console.log("arr: ", arr);
console.log("filterArr: ", filterArr);

const myArr = {
  0: 11,
  1: 32,
  2: 7,
  3: 19,
  4: 40,
  5: 56,
  6: 57,
  length: 7,
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
  },
  filter: function (cb) {
    const temp = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i)) {
        temp.push(this[i]);
      }
    }
    return temp;
  },
  // filter: function (cb) {
  //   const temp = [];
  //   let i = 0;
  //   while (cb) {
  //     temp[i] = cb(this[i], i);
  //   }
  //   return temp;
  // },
};

const myFilterArr = myArr.filter((item) => item % 2 == 0);
const myFilterArr2 = myArr.filter((item) => item > 50);
console.log("myFilterArr: ", myFilterArr);
console.log("myFilterArr2: ", myFilterArr2);
