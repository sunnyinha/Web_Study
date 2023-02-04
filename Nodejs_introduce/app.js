//node js 내장 모듈 http 불러오기
const http = require("http");

//서버 생성
const server = http.createServer();

// 수신할 포트 설정
//보통 80,443
//개발용이니까 3000으로 임시지정
server.listen(3000);
