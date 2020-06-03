import './App.css';

import Counter from './counter';
import Greetings from './Greeting';
import MyForm from './myForm';
import React from 'react';
import logo from './logo.svg';

function App() {
  const onSubmit = (form:{name:string; description:string}) =>{
   console.log(form) 
  }
  return (
    <MyForm onSubmit={onSubmit}/>
  );
}

export default App;
