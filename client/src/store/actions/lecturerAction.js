import axios from 'axios';

export function setLecturers(payload) {
  return { type: 'lecturers/setLecturers', payload };
}

export function setLecturersAsync(url) {
  return ((dispatch) => {
    axios({
      url: url,
      method: 'GET',
      headers: { access_token: localStorage.access_token }
    })
  })
    .then(({ data }) => {
      dispatch(setLecturers(data));
    })
    .catch(err => {
      console.log(err);
    })
}