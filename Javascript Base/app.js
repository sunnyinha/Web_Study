// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
let name = "Web online Course";
let price = 1000;
//배열 만들 때 대괄호 쓰기 (중괄호 아님)
let goal = ["making my website", "making readable code", "Having Fun"];

// 2) Output ("alert") the three variable values
alert(name);
alert(price);
alert(goal[0]);
alert(goal[1]);
alert(goal[2]);
// 3) Try "grouping" the three variables together and still output their values thereafter
// 객체 생성 할때 값을 넣어줘야 하니까 = 쓰는 거 까먹지 말기
let grouping = {
  name: "Web online Course",
  price: 1000,
  goal: ["making my website", "making readable code", "Having Fun"],
};
// 4) Also output the second element in your "main goals" variable
alert(grouping.goal[1]);
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function AccessGoal(g, th) {
  return g[th];
}

// 6) Execute your custom command from (5) and output ("alert") the result
alert(AccessGoal(grouping.goal, 2));
