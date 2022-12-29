//getElementById을 통해 html 특정 요소에 id로 접근 가능
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://www.google.co.kr/";

//유틸리티 함수로 접근
//css 선택자로 접근함
//anchorElement = document.querySelector("#external-id"); // CSS 선택자 여러개 존재 시 일치하는 첫번째 요소
anchorElement = document.querySelectorAll("#external-id"); // CSS 선택자 여러개 존재 시 배열로 모두 받음
anchorElement.href = "https://github.com/sunnyinha/Web_Study";

// 요소 추가
// 1. 새로운 요소 만들기
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.google.co.kr/";
newAnchorElement.textContent = "This leads to Google!";
// 2. 새로운 요소를 넣어줄 부모 요소 접근
let firstParagraph = document.querySelector("p");
// 3. 삽입해 줘야 할 요소에 접근
firstParagraph.append(newAnchorElement);

//요소 삭제
//1. 빼야 할 요소 선택
let firstH1Elenment = document.querySelector("h1");

//2. 요소 삭제
//firstH1Elenment.remove();
firstH1Elenment.parentElement.removeChild(firstH1Elenment);

//요소 이동
firstParagraph.parentElement.append(firstParagraph);

//innerHTML
//html 요소까지 포함
console.log(firstParagraph.innerHTML);
//위의 것과 비교 텍스트 내용만
//console.log(firstParagraph, textContent);
firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>";
