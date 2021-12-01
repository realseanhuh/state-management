const {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
  error: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...prevState,
        isLoggingIn: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...prevState,
        isLoggingIn: false,
        data: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
        error: action.error,
      };
    case LOG_OUT:
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
