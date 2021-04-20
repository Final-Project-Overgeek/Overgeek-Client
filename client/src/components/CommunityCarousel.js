import React from 'react'
import { useHistory } from 'react-router-dom'

function Carousel() {

  const history = useHistory()
  function gotoPayment(e){
    if(!localStorage.access_token){
      // history.push('/login')
      history.push({pathname:"/login",state: {from: "subscribe"}})
    } else {
      history.push('/payments')
    }
  }

  return(
    <div>
      <div className="wrapper mb-4">
        <h4><span></span></h4>
      </div>
      <a href="#" onClick={(e) => gotoPayment(e)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Subscribe
      </a>
    </div>
  )

}

export default Carousel