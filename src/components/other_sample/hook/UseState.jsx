import React, {useState} from 'react';

const UseState = (props) => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const add = () => {
        setNumber1(number1 + 1);
        setNumber2(number2 + 1);
    }

    return (
        <>
            <h1>{number1}</h1>
            <button onClick={add}>Add</button>
        </>
    )
};

export default UseState;
