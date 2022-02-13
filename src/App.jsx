import React , {useState} from 'react';
import Props from './Props';
import UseState from './Hooks/UseState';
import './App.css';

function App() {
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? 'dayLight' : ``}`}>
      <h1 className='heading'>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <button className='btn' onClick={() => setMorning(!isMorning)}>Update Day</button>
      <Props techName='React.JS !' yearName='2020' />
      <Props techName='Blockchain !' yearName='2021' />
      <UseState />
    </div>
  );
}

export default App;