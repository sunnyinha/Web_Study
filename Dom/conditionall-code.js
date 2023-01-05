//if문 연습
const myName = "Max";

if (myName === "Max") {
  console.log("Hello!");
}

let isLoggedIn = true;
if (!isLoggedIn) {
  console.log("User is NOT logged in!");
}

//불리언이 아닌 다른 자료형
// 문자열의 경우 빈문자열이나 0이 기본적으로 거짓처
// const enteredUserName ="";

// if(enteredUserName)
// {
//   console.log("Input is valid!");
// }

const enteredUserName = ""; //0

if (enteredUserName.length > 0) {
  console.log("Input is valid!");
}
