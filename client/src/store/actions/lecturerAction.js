import axios from "axios";

export function setLecturers(payload) {
  return { type: "lecturers/setLecturers", payload };
}

export function setLecturersAsync({ url, setLoading }) {
  return (dispatch) => {
    axios({
      url: url,
      method: "GET",
    })
      .then(({ data }) => {
        dispatch(setLecturers(data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function setLecturer(payload) {
  return { type: "lecturer/setLecturer", payload };
}

export function setLecturerAsync({ url, setLoading }) {
  return (dispatch) => {
    axios({
      url: url,
      method: "GET",
    })
      .then(({ data }) => {
        dispatch(setLecturer(data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const setLecturerRating = ({ url, setLoading }) => {
  return (dispatch) => {
    console.log(`rating lecturer`);
    // axios({
    //   url: url,
    //   method: "POST",
    //   headers: { access_token: localStorage.access_token },
    // })
    //   .then((result) => {
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
};
