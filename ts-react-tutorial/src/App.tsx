import './App.css';

import Counter from './counter';
import Counter_reducer from './counter_reducer';
import Greetings from './Greeting';
import MyForm from './myForm';
import React from 'react';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';
import logo from './logo.svg';

function App() {
  const onSubmit = (form:{name:string; description:string}) =>{
   console.log(form) 
  }
  return (
    <SampleProvider>
      <ReducerSample/>
    </SampleProvider>
  );
}

export default App;
