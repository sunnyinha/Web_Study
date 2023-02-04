//node js 내장 모듈 http 불러오기
const http = require("http");

function handleRequest(requset, response) {
  //statusCode : 요청 성공 여부
  response.statusCode = 200;
  //응답 준비 끝
  response.end("<h1>Hello World!</h1>");
}

//서버 생성
const server = http.createServer(handleRequest);

// 수신할 포트 설정
//보통 80,443
//개발용이니까 3000으로 임시지정
server.listen(3000);
