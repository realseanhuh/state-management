const {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} = require("../actions/user");
const { produce } = require("immer");

const initialState = {
  isLoggingIn: false,
  data: null,
  error: null,
};

// immer의 기본 꼴 - nextState = produce(prevState, (draft) => {})

const userReducer = (prevState = initialState, action) => {
  // 이전 state와 action을 받아서 다음 state를 만들어 내는 함수
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.data = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.isLoggingIn = false;
        draft.data = null;
        draft.error = action.error;
        break;
      case LOG_OUT:
        draft.isLoggingIn = false;
        draft.data = null;
        break;
      default:
        break;
    }
  });
  // switch (action.type) {
  //   case LOG_IN_REQUEST:
  //     return {
  //       ...prevState,
  //       isLoggingIn: true,
  //     };
  //   case LOG_IN_SUCCESS:
  //     return {
  //       ...prevState,
  //       isLoggingIn: false,
  //       data: action.data,
  //     };
  //   case LOG_IN_FAILURE:
  //     return {
  //       ...prevState,
  //       isLoggingIn: false,
  //       data: null,
  //       error: action.error,
  //     };
  //   case LOG_OUT:
  //     return {
  //       ...prevState,
  //       isLoggingIn: false,
  //       data: null,
  //     };
  //   default:
  //     return prevState;
  // }
};

module.exports = userReducer;
