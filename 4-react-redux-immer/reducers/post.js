const { ADD_POST } = require("../actions/post");
const { produce } = require("immer"); // import는 produce지만 require는 {produce}로, 대부분 사용방법이 일치하지만 다른 경우도 존재

const initialState = [];

const postReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case ADD_POST:
        draft.push(action.data);
        break;
      default:
        break;
    }
  });
  // switch (action.type) {
  //   case ADD_POST:
  //     return [...prevState, action.data];
  //   // case EX_IMMER: // state.deep.deeper.deepest.a = 'b';
  //   //   return { // 불변성 지키려다 코드가 매우 지저분해짐
  //   //     ...prevState,
  //   //     deep: {
  //   //       ...prevState.deep,
  //   //       deeper: {
  //   //         ...prevState.deep.deeper,
  //   //         deepest: {
  //   //           ...prevState.deep.deeper.deepest,
  //   //           a: 'b'
  //   //         },
  //   //       },
  //   //     },
  //   //   };
  //   default:
  //     return prevState;
  // }
};

module.exports = postReducer;
