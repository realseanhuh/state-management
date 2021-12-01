export const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(logInSuccess(data));
      }, 2000);
    } catch (err) {
      console.error(err);
      dispatch(logInFailure(err));
    }
  };
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

const logInRequest = (data) => {
  // 동기 요청 작업
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};
const logInSuccess = (data) => {
  // 요청 성공 시 동기 작업
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};
const logInFailure = (error) => {
  // 요청 실패 시 동기 작업
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
