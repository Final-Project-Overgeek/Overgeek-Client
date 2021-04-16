import axios from 'axios';

export function setUser(payload) {
  return { type: 'user/setUser', payload };
}

export function setUserAsync({ url, history, payload }) {
  return ((dispatch) => {
    axios({
      url: url,
      method: 'POST',
      data: {
        username: payload.username,
        password: payload.password
      }
    })
      .then(({ data }) => {
        dispatch(setUser(data));
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  })
}