const initialState = {
  token: {},
  isTokenLoading: false
};

function paymentsReducer(state = initialState, actions) {
  const {type, payload} = actions;

  if (type === 'token/setToken') {
    return { ...state, token: payload};
  }
  else if(type === 'IsTokenLoading/setTrueFalse'){
    return { ...state, IsTokenLoading: payload}
  }
  else {
    return state;
  }
}

export default paymentsReducer;