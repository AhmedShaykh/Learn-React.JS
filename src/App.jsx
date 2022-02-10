import React from 'react';
import Props from './Props';
import UseState from './Hooks/UseState';
import './App.css';

function App() {
  return (
    <div className='box'>
      <Props techName='React.JS !' yearName='2020' />
      <Props techName='Blockchain !' yearName='2021' />
      <UseState />
    </div>
  );
}

export default App;