let inputElement = document.querySelector("input");
function retrieveUserInput(event) {
  let CountWord = event.target.value.length + "/ 60";
  let pickspan = document.querySelector("span");
  let newspan = document.createElement("span");
  newspan.textContent = CountWord;
  let pickbody = document.querySelector("body");

  pickspan.remove(pickspan);
  pickbody.append(CountWord);
  // 에러남.. 1개까지만 글자수 세고 remove 처리 불가능
}
inputElement.addEventListener("input", retrieveUserInput);
