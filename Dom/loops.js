//기본 for문
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 배열 for 문
const users = ["MAX", "Anna", "Sunny"];
for (const user of users) {
  console.log(user);
}
// 객체 for문
const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]);
}

let isFinished = false;
//while문
while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}
console.log("Done");
