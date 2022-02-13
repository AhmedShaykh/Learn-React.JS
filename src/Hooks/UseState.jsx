import React, { useState } from 'react';
import Message from '../Message';

function UseState() {
    let [count, setCount] = useState(1);
    return (
        <div>
            <Message counter={count} />
            <br />
            <button onClick={() => setCount(count + 1)}>Update Value</button>
            <br />
            <br />
            <button onClick={() => setCount(count - 1)}>Delete Value</button>
            <br />
            <br />
            <button onClick={() => setCount(count * 2)}>Double Value</button>
            <br />
            <br />
            <button onClick={() => setCount(count / 2)}>Divide Value</button>
        </div>
    );
}

export default UseState;