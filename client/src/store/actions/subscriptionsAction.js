import axios from 'axios';

export function setSubscription(payload) {
  return { type: 'subscriptions/setSubscriptions', payload };
}

export function setSubscriptionAsync({ url, setLoading}) {
  return ((dispatch) => {
    axios({
      url: url,
      method: 'GET',
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        dispatch(setSubscription(data));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  })
}
