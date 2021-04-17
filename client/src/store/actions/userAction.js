import axios from 'axios';

export function loginAsync({ url, payload, history }) {
  axios({
    url: url,
    method: 'POST',
    data: payload
  })
    .then(({ data }) => {
      localStorage.setItem('access_token', data.access_token);
      history.push('/');
    })
    .catch(err => {
      console.log(err);
    })
}

export function registerAsync({ url, payload, history }) {
  axios({
    url: url,
    method: 'POST',
    data: payload
  })
    .then(({ data }) => {
      console.log(data)
      history.push('/login');
    })
    .catch(err => {
      console.log(err);
    })
}