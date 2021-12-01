const { createStore } = require("redux");
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
const store = createStore(reducer, initialState);
console.log("1st", store.getState());
store.dispatch(
  logIn({
    id: "1",
    name: "sean",
    admin: true,
  })
);
console.log("2nd", store.getState());
store.dispatch(
  addPost({
    id: "1",
    userId: "1",
    content: "상태 관리",
  })
);
console.log("3rd", store.getState());
store.dispatch(
  addPost({
    id: "2",
    userId: "1",
    content: "상태 관리 - 2",
  })
);
console.log("4th", store.getState());
store.dispatch(logOut());
console.log("5th", store.getState());
