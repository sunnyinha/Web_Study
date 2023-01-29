//player edit 창 시각화용
function openPlayerConfig() {
  editPlayer = +event.target.dataset.playerid; // + 문자열 -> 숫자(ex)+"1" -> 1)
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}
//player edit 창 시각화 해제용(cancel)
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  //오류 후 cancel 버튼시 오류 error class 효과, 텍스트 취소
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  // 이전에 입력한 인풋값이 뜨는 거 방지
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  //console.log(event);
  // 생성된 이벤트 객체 내부 메서드, 변수 등 확인 가능
  event.preventDefault();
  // 요청을 보내고 화면 리로드가 브라우저 기본 동작이라서
  // 화면 리로드로 다시 처음 화면으로 돌아가는 것을 방지

  //event 객체 FormData 객체로 form 내부 정보 래핑(FormData의 매세드 사용가능)
  const formData = new FormData(event.target);
  //get으로 서버로 playername name을 가진 결과값 정보 전송
  //const enteredPlayername = formData.get("playername");
  // playername name을 가진 결과값 확인(콘솔에서)
  // console.log(enteredPlayername);

  // trim : 앞 뒤 공백 제거
  const enteredPlayername = formData.get("playername").trim();

  // 이름에 공백만 있을 때(입력을 안했을떼, 스페이스만 누를때)
  if (!enteredPlayername) {
    // div 태그에 "error"라는 css 적용애 사용될 class 추가(에러 시 디자인)
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  // article 태그 선택
  const updateedPlayerDataElement = document.getElementById(
    "player-" + editPlayer + "-data"
  );
  // article 태그 안 2번째 태그인 h3 내용 변경
  updateedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editPlayer - 1].name = enteredPlayername;
  // 위의 코드와 동일
  // if (editPlayer === 1) {
  //   players[0].name = enteredPlayername;
  // } else {
  //   player[1].name = enteredPlayername;
  // }

  closePlayerConfig();
}
