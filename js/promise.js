// ES5 생성자 함수
const p = new Promise((resolve, reject) => {
  // resolve는 성공시 호출
  resolve("성공"); // then 메소드의 콜백함수가 호출
  // reject는 실패시 호출
  reject("실패"); // catch 메소드의 콜백함수가 호출
});

p.then((item) => {
  console.log("then:" + item);
}).catch((item) => {
  console.log("catch:" + item);
});
