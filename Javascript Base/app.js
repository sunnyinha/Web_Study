let age = 32;
let userName = "Sunny";
//**주의** 문자열 따옴표 사이 줄바꿈 금지(에러남) /해결 방법 1 : 문자열 내용이 길면 +로 끊어주기, 해결 방법 2: 따옴표 대신 역따옴표(키보드 1옆에 있음) 사용
let talk = "very" + "nice";
let expression = `good
night`;

//배열 : 연관된 여러개의 값(숫자, 문자열 섞어도 됨)을 하나의 변수명으로 표현가능
//배열의 인덱스 0부터 시작, 배열이름[인덱스]로 배열의 개별 항목 표현 가능
let hobbies = ["Sports", "Cooking", "Reading"];
alert(hobbies[0]);

//객체: 연관이 없는 독립된 다양한 변수 모음(ex)여권 정보)
//각각의 객체 요소들은 key(=변수,레이블) : vlaue 구성
//객체 생성 시 각각의 key들은 객체에 scoped(소속) 된 상태이고 let 키워드를 통해 생성할 필요 x
//각각 요소(key:value)별로 줄바꿈해주면 가독성 높음
//객체 요소 접근 시 객체이름.(접근 객체 속성) 으로 접근 가능

let job = {
  title: "Developer",
  place: "Korea",
  salary: 0,
};
alert(job.place);

//기본 연산
let BMI;
let weight = 60;
let tall = 1.65;
//덧셈
tall = 1.65 + 0.05;
//뺄셈
weight = weight - 5;
//곱셈& 나눗셈
BMI = weight / (tall * tall);
alert(BMI);
