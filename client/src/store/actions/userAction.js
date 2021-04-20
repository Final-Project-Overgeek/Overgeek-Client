import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export function loginAsync({ url, payload, history, from }) {
  console.log('>>>', from)
  axios({
    url: url,
    method: "POST",
    data: payload,
  })
  .then(({ data }) => {
    localStorage.setItem("access_token", data.access_token);
    history.push("/");
    // if(history.loca === 'home')
    console.log(history)
      toast.success(`Success to log in to OverGeek!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    })
    .catch((err) => {
      console.log(err);
      toast.error(`Failed to log in to OverGeek!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    });
}

export function registerAsync({ url, payload, history }) {
  axios({
    url: url,
    method: "POST",
    data: payload,
  })
    .then(({ data }) => {
      history.push("/login");
    })
    .catch((err) => {
      console.log(err);
    });
}
