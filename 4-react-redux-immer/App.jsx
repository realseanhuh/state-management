import React from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "./actions/user";

class App {
  onClickBtn = () => {
    this.props.dispatchLogIn({
      id: "2",
      name: "moon",
      admin: false,
    });
  };

  render() {
    const { isLoggedIn, user } = this.props;
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
  }
}

// 렌더링이 일어날 때마다 매번 실행됨 -> 성능 문제를 극복하기 위해 reselect 사용(hooks는 사용할 필요가 없음)
// 클래스는 하나가 바뀌면 객체가 통째도 다시 실행되지만 훅스는 useSelector로 분리되어 있기 때문에 바뀐 것만 실행됨 -> 계산량 감소
// 번외로 리덕스에서 데이터 가져오는 컴포넌트를 컨테이너(컴포넌트)라고 부름
const mapStateToProps = (state) => ({
  isLoggingIn: state.isLoggingIn,
  user: state.user.data,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn: (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App); // 컴포넌트를 확장해주는 역할을 하는 하이어오더 컴포넌트
