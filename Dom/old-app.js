let ParagraphElement = document.querySelector("p");
function changeParagraphText(event) {
  ParagraphElement.textContent = "Clicked!";
  console.log("Paragraph clicked!");
  console.log(event);
}
//리스너(신호가 올 때까지 계속 기다림-> 신호가 오면 작동)
//콜백 함수(부를 때만 실행) - 함수이름() 사용x -> 함수이름만 기억해둬! 명령내릴때 실행할 친구야!
// 클릭 신호 감지 리스너
ParagraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");
// 이벤트에 대해서 브라우저가 자동으로 전달하는 특정 객체 ex. 아래 예시에서는 event
function retrieveUserInput(event) {
  //let enteredText = inputElement.value;
  //console.log(enteredText);

  //위의 코드 단점: 외부 변수 사용 => 해결 : event 매개변수 사용
  //console.log(event); // event 종류 colsole에 띄우기
  //let enteredText = event.target.value; //event target이 querySelector로 가리킨 객체와 동일 객체를 가리킴
  //console.log(enteredText);
  //event 속성 value와 data 차이
  //value : 현재 입력 요소에 저장된 완전한 값 제공
  //data : 마지막으로 입력 이벤트 발생으로 추가된 구체적인 입력값 제공
  let enteredText = event.data;
  console.log(enteredText);
}

// 인풋 신호 감지 리스너
inputElement.addEventListener("input", retrieveUserInput);
