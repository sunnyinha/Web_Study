//node js 내장 모듈 http 불러오기
const http = require("http");

function handleRequest(request, response) {
  // localhost:3000/currenttime 직접 입력
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    // 현재 날짜/시간 리턴 / toISOString() zero-UTC timezone으로 리턴
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  }
  //defalt 실행(/)
  else if (request.url === "/") response.statusCode = 200;
  response.end("<h1>Hello World!</h1>");
}

//서버 생성
const server = http.createServer(handleRequest);

// 수신할 포트 설정
//보통 80,443
//개발용이니까 3000으로 임시지정
server.listen(3000);
