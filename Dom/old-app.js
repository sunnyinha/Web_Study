//const 적용! , 객체 고정과 값 고정의 차이 잘 이해하기
const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

//cosole.dir(productNameInputElement);
const maxAllowedChars = productNameInputElement.maxLength; // maxLength 추출 최대글자수 유동적으로 반응

// 함수에서는 실행할 때마다 메모리를 다시 받아오고 끝나면 날리고 하는 걸 이해하기
function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  //const remaingingCharacters = 60 - enteredTextLength;
  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}
productNameInputElement.addEventListener("input", updateRemainingCharacters);
