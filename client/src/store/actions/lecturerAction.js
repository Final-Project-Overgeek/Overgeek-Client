import axios from "axios";
import swal from "@sweetalert/with-react";

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

export const setLecturerRating = ({
  urlRating,
  setLoading,
  value,
  lecturer,
}) => {
  return (dispatch) => {
    axios({
      url: urlRating,
      method: "POST",
      headers: { access_token: localStorage.access_token },
      data: {
        rating: value,
      },
    })
      .then((result) => {
        setLoading(false);
        swal(
          "Thanks for your rating!",
          `You rated ${lecturer} ${value}/5`,
          "success"
        );
      })
      .catch((err) => {
        swal(
          "Failed to rating this lecturer!",
          "You have already rate this lecturer",
          "error"
        );
      });
  };
};
