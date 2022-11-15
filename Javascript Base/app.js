// 객체 추가 설명
//속성 : 객체 안의 변수
//메소드 : 객체 안의 함수
let person = {
  //property
  name: "Max",
  // Method
  greet() {
    //****콘솔****//
    //브라우저 제공
    //모든 종류의 매개변수 수용 가능
    //콘솔 창에 출력 데이터 확인 가능
    // 오류 메시지, 실시간 출력 데이터 정보 확인 및 저장 가능
    console.log("Hello!");
  },
};
//객체 메소드 호출
person.greet();
console.log(5);

// Math operations

//1. 수
//integer : 소수점 없는 수
//float: 소수점 있는 수
console.log(10 + 4); //수의 뎃셈
console.log(10 - 4); //수의 뺄셈
console.log(10 * 4); // 수의 곱셈
console.log(10 / 4); // 수의 나눗셈
console.log(10 % 4); // 수의 나머지

let result = ((1 + 2 - 1) * 10) / 2; //수의 여러 연산 한번에 수행 가능
console.log(result);

result = 10;
// 수의 기본연산 축약형들
//result = result +1;
result++;
//result = result -1;
result--;

//result = result +5;
result += 5;
//result = result - 5;
result -= 5;
//result = result *5;
result *= 5;
//result = result /5;
result /= 5;
console.log(result);

//2. 문자열
console.log("Sunny" + " " + "day"); //문자열의 덧셈
//문자열은 뎃셈 이외의 다른 연산 불가

let a = "apple";
//문자열은 객체가 아니지만 자바스크립트에 의해 자동으로 객체에 의해 감싸져 특정 속성,메소드에 접근 가능
//문자열 길이 알아내기
console.log(a.length);
//문자열 다 대문자로 바꾸기
console.log(a.toUpperCase());

let hobbies = ["sports", "cooking"];
// 배열도 legth 속성을 가짐 => 배열 항목 개수 출력
console.log(hobbies.length);
