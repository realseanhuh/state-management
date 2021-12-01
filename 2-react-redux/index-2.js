const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers"); // 1. reducer는 길어질 수 있기 때문에 별도로 분리
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post"); // 2. action은 많아질 수 있기 때문에 별도로 분리

const initialState = {
  // initialState 구조를 잘 짜야 하위의 reducer, action의 구조도 분리해서 잘 잡을 수 있음
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [], // posts와 comments를 분리해야 하는가?
};
const loggingMiddleware = (store) => (dispatch) => (action) => {
  // 미들웨어는 3단 함수임 - 커링 방식
  console.log("logging", action); // action을 로깅하는 기능 추가
  dispatch(action); // 기본 동작
}; // 3단 함수로 실행 시점별(store-dispatch, dispatch-action, action-)로 작업을 추가할 수 있음
const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // action의 타입이 함수인 경우 비동기 처리인 것으로 약속(객체면 동기, 함수면 비동기)
    // (sync) action creator는 객체를 리턴하고, async action creator는 함수를 리턴
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
};
const enhancer = compose(applyMiddleware(loggingMiddleware, thunkMiddleware)); // 미들웨어를 통한 기능 추가(증강), applyMiddleware 함수 이외에도 여러 함수를 합성하기 위해 compose 사용
const store = createStore(reducer, initialState, enhancer);
console.log("1st", store.getState());
store.dispatch(
  logIn({
    id: "1",
    name: "sean",
    admin: true,
  })
);
// console.log("2nd", store.getState());
// store.dispatch(
//   addPost({
//     id: "1",
//     userId: "1",
//     content: "상태 관리",
//   })
// );
// console.log("3rd", store.getState());
// store.dispatch(
//   addPost({
//     id: "2",
//     userId: "1",
//     content: "상태 관리 - 2",
//   })
// );
// console.log("4th", store.getState());
// store.dispatch(logOut());
// console.log("5th", store.getState());
