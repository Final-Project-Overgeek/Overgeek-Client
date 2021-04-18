const initialState = {
  subscriptions: [],
};

function subscriptionsReducer(state = initialState, actions) {
  const {type, payload} = actions;

  if (type === 'subscriptions/setSubscriptions') {
    return { ...state, subscriptions: payload};
  } 

  return state;
}

export default subscriptionsReducer;