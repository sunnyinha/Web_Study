let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

//cosole.dir(productNameInputElement);
let maxAllowedChars = productNameInputElement.maxLength; // maxLength 추출 최대글자수 유동적으로 반응

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  //let remaingingCharacters = 60 - enteredTextLength;
  let remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}
productNameInputElement.addEventListener("input", updateRemainingCharacters);
