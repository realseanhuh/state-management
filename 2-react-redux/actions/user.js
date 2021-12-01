const logIn = (data) => {
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
const logInRequest = (data) => {
  // 동기 요청 작업
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
const logInSuccess = (data) => {
  // 요청 성공 시 동기 작업
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};
const logInFailure = (err) => {
  // 요청 실패 시 동기 작업
  return {
    type: "LOG_IN_FAILURE",
    err,
  };
};

// const logIn = (data) => {
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };
const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = {
  logIn,
  logOut,
};
