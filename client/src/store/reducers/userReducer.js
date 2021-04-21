const initialState = {
  user: {}
};

function userReducer(state = initialState, actions) {
  const {type, payload} = actions;

  if (type === 'user/setUser') {
    return { ...state, user: payload};
  }

  return state;
}

export default userReducer;