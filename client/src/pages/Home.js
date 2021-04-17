import React, { useState, useEffect } from "react";
import logo from "../logo.svg";

// brilian edits
import { setLecturersAsync } from '../store/actions/lecturerAction';
import { useDispatch, useSelector } from 'react-redux';
import baseUrl from '../api';

const Home = () => {
  // brilian edits
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const lecturers = useSelector((state) => state.lecturerReducer.lecturers);
  const url = baseUrl + '/lecturers'

  useEffect(() => {
    dispatch(setLecturersAsync(url));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
