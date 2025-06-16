const sum = function (n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
};

const div = function (n1, n2) {
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
};

/**
 * 계산기 함수
 *
 * @param {function} cb 계산 기능이 있는 함수
 * @param {number} n1 number
 * @param {number} n2 number
 *
 *
 * 예시:
 * calc(sum, 10, 20);
 */
const calc = function (cb, n1, n2) {
  cb(n1, n2);
};

calc(sum, 10, 20);
calc(div, 10, 2);
calc(
  function (n1, n2) {
    console.log(n1 * n2);
  },
  30,
  2
);

// calc를 호출하여 calc(fn, 10, 20); 더 큰 수가 콘솔에 출력되도록 해주세요.
const findMax = function (n1, n2) {
  console.log(n1 > n2 ? `${n1}` : `${n2}`);
};
calc(findMax, 10, 20);


calc((n1, n2) => console.log(n1 > n2 ? n1 : n2), 10, 20);
