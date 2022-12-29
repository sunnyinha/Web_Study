//getElementById을 통해 html 특정 요소에 id로 접근 가능
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://www.google.co.kr/";

//유틸리티 함수로 접근
//css 선택자로 접근함
//anchorElement = document.querySelector("#external-id"); // CSS 선택자 여러개 존재 시 일치하는 첫번째 요소
anchorElement = document.querySelectorAll("#external-id"); // CSS 선택자 여러개 존재 시 배열로 모두 받음
anchorElement.href = "https://github.com/sunnyinha/Web_Study";
