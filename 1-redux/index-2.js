const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};
const initialState = {
  user: null,
  posts: [],
};
const store = createStore(reducer, initialState);
console.log("1st", store.getState());
const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};
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
