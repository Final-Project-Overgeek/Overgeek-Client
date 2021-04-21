import axios from "axios";

export function setToken(payload) {
  return { type: "token/setToken", payload };
}

export function setTokenLoading(payload) {
  return { type: "IsTokenLoading/setTrueFalse", payload };
}

export function createToken({ url, payload }) {
  return (dispatch) => {
    dispatch(setTokenLoading(true));
    axios({
      url: url,
      method: "POST",
      data: {
        amount: payload,
      },
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((data) => {
        dispatch(setToken(data.data));
        dispatch(setTokenLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
