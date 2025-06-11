const myArray = [true, 3.14, "Hello", { name: "홍길동" }];

console.log("myArray", myArray);
console.log("myArray.length", myArray.length);

// 인덱스 2번에 있는 데이터 읽어와서 콘솔 출력
console.log("myArray[2]", myArray[2]);
console.log("myArray['2']", myArray["2"]);

// 배열 타입 불러오기
console.log("typeof myArray", typeof myArray);

// 배열 항목 추가
myArray[4] = "홍길동";
console.log("myArray", myArray);
console.log("myArray.length", myArray.length);

// 인덱스 번호 건너뛰고 항목 추가
myArray[6] = "신사임당";
console.log("myArray", myArray);
console.log("myArray.length", myArray.length);
console.log("myArray[5]", myArray[5]);

//배열에 아이템 추가시 push메소드를 활용한다.
const myArray2 = [];
console.log("myArray2.length", myArray2.length);
myArray2.push("안녕");
myArray2.push(3.14);
myArray2.push(true);
myArray2.push(false);
myArray2.push({ age: 12 });

console.log("myArray2", myArray2);
console.log("myArray2.length", myArray2.length);

console.log("마지막 요소 제거");
const pop = myArray2.pop(); //마지막 요소 제거, 파괴 메소드
console.log("pop", pop);
console.log("myArray2", myArray2);
console.log("myArray2.length", myArray2.length);

console.log("1번방부터 1개 아이템 제거");
myArray2.splice(1, 1);
console.log("myArray2", myArray2);
console.log("myArray2.length", myArray2.length);
