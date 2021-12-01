import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./actions/user";

const App = () => {
  const { isLoggingIn, data: user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onClickBtn = useCallback(() => {
    dispatch(
      logIn({
        id: "2",
        name: "moon",
        admin: false,
      })
    );
  }, []);
  return (
    <>
      <h1>App</h1>
      {isLoggingIn ? (
        "로그인 중..."
      ) : user ? (
        <div>{user.name}</div>
      ) : (
        "로그인 해주세요."
      )}
      <button onClick={onClickBtn}>로그인</button>
    </>
  );
};

export default App;
