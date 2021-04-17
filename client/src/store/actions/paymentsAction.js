import axios from 'axios';

export function setToken(payload) {
  return { type: 'token/setToken', payload };
}

export function setTokenLoading(payload) {
  return { type: 'IsTokenLoading/setTrueFalse', payload };
}

export function createToken({ url, payload }) {
  return dispatch => {
    dispatch(setTokenLoading(true))
     axios({
      url: url,
      method: 'POST',
      data: {
        amount: payload
      }, headers: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJrZW4xQG1haWwuY29tIiwidXNlcm5hbWUiOiJrZW4xIiwicGhvbmVfbnVtYmVyIjoiODg4OTU1MzIyNDQiLCJzdWJzY3JpcHRpb25fZGF0ZSI6bnVsbCwicm9sZSI6InVzZXIiLCJpYXQiOjE2MTg2MjQ5NzV9.Tr_K4qCLezik71o32lIlOBbrF2SrRrE9CBTCzbm3qD0'
      }
    })
      .then(data => {
        console.log('dari actions',data)
        dispatch(setToken(data.data))
        dispatch(setTokenLoading(false))
      })
      .catch(err => {
        alert('fail')
        console.log(err);
      })
  }
  
}