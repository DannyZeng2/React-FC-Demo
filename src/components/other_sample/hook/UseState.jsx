import React, {useState} from 'react';

const UseState = (props) => {

    const [number, setNumber] = useState(0);

    const add = () => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={add}>Add</button>
        </>
    )
};

export default UseState;
