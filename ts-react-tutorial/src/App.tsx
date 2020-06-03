import './App.css';

import Greetings from './Greeting';
import React from 'react';
import logo from './logo.svg';

function App() {
  const onClick = (name:string) =>{
    console.log(name)
  }
  return (
    <Greetings name='리액트' mark='!'onClick={onClick}/>
  );
}

export default App;
