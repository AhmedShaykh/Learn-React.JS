import React from 'react';
import Props from './Props';
import './App.css';

function App() {
  // const name = 'Ahmed Shaykh';
  // const name = 'Learning React.JS !';
  // return (
  //     // <h1>
  //     //   Learning React.JS !
  //     // </h1>
  //     name
  //     // <Message />
  // );
  return (
    <div>
      <Props techName='React.JS !' yearName='2020'/>
      <Props techName='Blockchain !' yearName='2021'/>
    </div>
  );
}

export default App;