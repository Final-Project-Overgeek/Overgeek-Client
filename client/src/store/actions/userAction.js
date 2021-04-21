import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export function loginAsync({ url, payload, history }) {
  return (dispatch) => {
    axios({
      url: url,
      method: "POST",
      data: payload,
    })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        history.push("/");
        toast.success(`Success log in to OverGeek!`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Invalid email or password!`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
}

export function registerAsync({ url, payload, history }) {
  axios({
    url: url,
    method: "POST",
    data: payload,
  })
    .then(({ data }) => {
      history.push("/login");
      toast.success(`Success to sign up!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    })
    .catch((err) => {
      console.log(err);
      toast.error(`Failed to sign up!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    });
}

export function setUser(payload) {
  return { type: 'user/setUser', payload };
}

export function getUser({ url }) {
  return (dispatch) => {
    axios({
      url: url,
      method: 'GET',
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({ data }) => {
      dispatch(setUser(data))
    })
    .catch((err) => {
      console.log(err);
    });
  }
}