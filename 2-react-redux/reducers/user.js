const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    // case "LOG_IN":
    //   return {
    //     ...prevState,
    //     isLoggingIn: true,
    //     data: action.data,
    //   };
    case "LOG_IN_REQUEST":
      return {
        ...prevState,
        isLoggingIn: true,
        data: action.data,
      };
    case "LOG_IN_SUCCESS": {
      console.log("2nd", prevState); // 원래는 return으로 새로운 state 객체로 대체된 후 출력하기 위한 의도
      return {
        ...prevState,
        isLoggingIn: true,
        data: action.data,
      };
    }
    case "LOG_OUT":
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      };
    default:
      return prevState;
  }
};

module.exports = userReducer;
