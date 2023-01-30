import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, {useState, useEffect} from "react";

function App() {

  const [message, setMessage] = useState([{}]);

 useEffect(()=>{
  fetch("http://localhost:5000/message")
  .then(
    (response) => response.json())
    .then((data) => setMessage(data.message));
 }, [])

  return (
    <div className='App'>
       <h1>hello{message}</h1>
    </div>
  );
}

export default App;
