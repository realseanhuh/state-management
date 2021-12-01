// reducer의 분리가 쉬운 이유는 순수 함수이므로, 즉 매개 변수와 함수 내부에서 선언한 변수 이외에는 다른 것을 참조하지 않는 함수이기 때문
const { combineReducers } = require("redux"); // 쪼개진 두 함수를 합치기
const userReducer = require("./user");
const postReducer = require("./post");

module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
});
