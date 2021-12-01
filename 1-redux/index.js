const { createStore } = require("redux"); // 1. redux 전체를 가져오는 게 아니라 부분을 가져올 때 중괄호

const reducer = (prevState, action) => {
  // 리듀서가 길어지는 단점, 액션이 많아지는 단점
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    default:
      return prevState;
  }
}; // 3. 새로운 state를 만들어주는 아이, 불변성을 지켜야 함
const initialState = {
  compA: 1,
  compB: "1",
  compC: true,
}; // 4.
const store = createStore(reducer, initialState); // 2.
console.log("1st", store.getState()); // 5.
// initialState.compA = 2; 처럼 state를 직접 바꾸는 방법을 포기하고, 매번 새로운 state를 생성하여 불변성을 지킴으로써 상태를 추적할 수 있음
const changeCompA = (data) => {
  return {
    // action
    type: "CHANGE_COMP_A",
    data,
  };
}; // 6. action을 객체로 직접 만드는 것보다 함수로 만들면 재활용할 수 있음 -> action creator
changeCompA(2); // 7.
store.dispatch(changeCompA(3)); // 8.
console.log("2nd", store.getState()); // 9.
// 데이터가 바뀌면 화면은 알아서 바뀌기 때문에 에러 디버깅용 외에는 subscribe는 거의 사용되지 않음
store.subscribe(() => {
  // 10. 화면 바꿔주는 코드를 이 안에 넣음, react-redux 안에 들어 있는 subscribe
  console.log("changed!");
});
// 11. node index 명령어로 실행해보기
