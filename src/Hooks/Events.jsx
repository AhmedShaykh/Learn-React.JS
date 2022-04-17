import React, { useState } from 'react'

const Events = () => {
    const aqua = '#4A64FF';
    const [bg, setBg] = useState(aqua);
    const [weather, setWeather] = useState('Click Me Its Too Cool!');
    const [feel, setFeel] = useState('Yahoo! I Love Winters!');

    const handEvent = () => {
        let newBg = '#f06000';
        setBg(newBg);
        let newWeather = 'Double Click Me Its Too Hot!';
        setWeather(newWeather);
        let newFeel = 'I Hate Hot Summer';
        setFeel(newFeel);
    }

    const backEvent = () => {
        setBg(aqua);
        setWeather('Click Me Its Too Cool!');
        setFeel('Yahoo! I Love Winters');
    }

    return (
        <div className="handle" style={
            {
                backgroundColor: bg
            }
        }>
            <h1 className='headHandle'>
                {feel}
            </h1>
            <br />
            <button onClick={handEvent}
                onDoubleClick={backEvent}
                type="button" class="btn-dark">
                {weather}
            </button>
        </div>
    )
}

export default Events;