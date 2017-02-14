function operations(state = [], action) {
  switch(action.type) {
    case 'FETCH_OPERATIONS' :
      console.log("Incrementing Likes!!");
      break
      // const i = action.index;
      // return [
      //   ...state.slice(0,i), // before the one we are updating
      //   {...state[i], likes: state[i].likes + 1},
      //   ...state.slice(i + 1), // after the one we are updating
      // ]
    default:
      return state;
  }
};

export default operations;




// // OPERATIONS REDUCER
// const INITIAL_STATE = {
//   operationList: {
//     operations: [],
//     error: null,
//     loading: false
//   }
// };
//
// export function operations(state = INITIAL_STATE, action) {
//   let error;
//   switch (action.type) {
//
//     case FETCH_OPERATIONS:
//       return {
//         ...state,
//         postsList: {
//           posts: [],
//           error: null,
//           loading: true
//         }
//       };
//   }
// };
