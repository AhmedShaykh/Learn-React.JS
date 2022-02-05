import React from 'react';
import './App.css';

function Props(props) {
    return (
        <div>
            <h1>Learning {props.techName}</h1>
            <h2>With Bootcamp {props.yearName}</h2>
        </div>
    );
}

export default Props;