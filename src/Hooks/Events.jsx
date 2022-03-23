import React, { useState } from 'react'

const Events = () => {
    const aqua = '#00FFFF';
    const [bg, setBg] = useState(aqua);
    const [weather, setWeather] = useState('Winter Time');

    const handEvent = () => {
        let newBg = '#f06000';
        setBg(newBg);
        let newWeather = 'Summer Time';
        setWeather(newWeather);
    }

    const backEvent = () => {
        setBg(aqua);
        setWeather('Winter Time');
    }

    return (
        <div className="handle" style={
            {
                backgroundColor: bg
            }
        }>
            <h1 className='headHandle'>
                Weather Changing With Handling Event's
            </h1>
            <br />
            <button onClick={handEvent}
                onDoubleClick={backEvent}
                type="button" class="btn btn-primary">
                {weather}
            </button>
        </div>
    )
}

export default Events;