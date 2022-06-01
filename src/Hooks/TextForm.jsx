import React, { useState } from 'react';

const [text, setText] = useState('Enter Text Here!');

function TextForm(props) {

    const handleUpperClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='form' >
            <h1>
                {props.heading}
            </h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange={handleOnChange} rows={8} value={text} />
            </div>
            <button type="button"
                onClick={handleUpperClick}
                class="btn btn-dark">Convert To Uppercase</button>
        </div>
    )
}

export default TextForm;