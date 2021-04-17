import React, { useState } from "react";
import { Navbar } from "../components";
import axios from 'axios'
import {createToken} from '../store/actions/paymentsAction'
import {useDispatch, useSelector} from 'react-redux'


function Payments() {
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()
  const token = useSelector((state) => state.paymentsReducer.token)
  const loading = useSelector((state) => state.paymentsReducer.isTokenLoading)
  const [result, setResult] = useState()
  const [newToken, setNewToken] = useState()

  function pay(e) {
    e.preventDefault()
    // dispatch(createToken({url: 'http://localhost:3001/payments/token', payload: amount}))
    
    
    // console.log(token)
    // loading || !token.token ? console.log('loading....') : 
    axios({
      url: 'http://localhost:3001/payments/token',
      method: 'POST',
      data: {
        amount: amount
      }, headers: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJrZW4xQG1haWwuY29tIiwidXNlcm5hbWUiOiJrZW4xIiwicGhvbmVfbnVtYmVyIjoiODg4OTU1MzIyNDQiLCJzdWJzY3JpcHRpb25fZGF0ZSI6bnVsbCwicm9sZSI6InVzZXIiLCJpYXQiOjE2MTg2MjQ5NzV9.Tr_K4qCLezik71o32lIlOBbrF2SrRrE9CBTCzbm3qD0'
      }
    })
    .then(data => {
      console.log(data.data)
      window.snap.pay(data.data.token, {
        onSuccess: function(result){
          // document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
          // return <h1> {(result)} </h1>
          console.log(result,'asdasdsad')
        },
        // Optional
        onPending: result => {
          // document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
          // return <h1>{JSON.stringify(result, null, 2)}</h1>
          console.log(result,'pasti masuk sini!')
          axios({
            url: 'http://localhost:3001/payments',
            method: 'POST',
            data: {
              result
            }, headers: {
              access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJrZW4xQG1haWwuY29tIiwidXNlcm5hbWUiOiJrZW4xIiwicGhvbmVfbnVtYmVyIjoiODg4OTU1MzIyNDQiLCJzdWJzY3JpcHRpb25fZGF0ZSI6bnVsbCwicm9sZSI6InVzZXIiLCJpYXQiOjE2MTg2MjQ5NzV9.Tr_K4qCLezik71o32lIlOBbrF2SrRrE9CBTCzbm3qD0'
            }
          })
          .then(data => {
            console.log(data)
          })
          .catch(err => {
            console.log(err)
          })

          // return <h1> {JSON.stringify(result, null, 2)} </h1>
        },
        // Optional
        onError: function(result){
          console.log(result,'<><><><><<<')
        }
      })

    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="container-fluid">
      <Navbar />
      <form>
        <input type="number" onChange={(e)=> {setAmount(e.target.value)}}/>
        <button onClick={(e) => pay(e)}>but</button>
      </form>
    </div>
  )
}

export default Payments