import React, { useState } from 'react';
import Props from './Props';
import UseState from './Hooks/UseState';
import Events from './Hooks/Events';
import TextForm from './Hooks/TextForm';
import './App.css';

function App() {
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1 className='heading'>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <button className="btn btn-light" onClick={() => setMorning(!isMorning)}>Update Day</button>
      <br /><br />
      <Props techName='Cloud Computing & AWS With Serverless!' yearName='2020' />
      <Props techName='Blockchain !' yearName='2021 To 2023' />
      <UseState />
      <br />
      <Events />
      <br />
      <div className="container">
        <TextForm heading="Enter The Text To Analyze Below !" />
      </div>
    </div>
  );
}

export default App;