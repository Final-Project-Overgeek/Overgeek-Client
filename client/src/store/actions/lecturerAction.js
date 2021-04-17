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
      .then(({ data }) => {
        dispatch(setLecturers(data));
      })
      .catch(err => {
        console.log(err);
      })
  })
}

export function setLecturer(payload) {
  return { type: 'lecturer/setLecturer', payload };
}

export function setLecturerAsync({ url, setLoading }) {
  return ((dispatch) => {
    axios({
      url: url,
      method: 'GET',
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        dispatch(setLecturer(data));
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
      })
  })
}