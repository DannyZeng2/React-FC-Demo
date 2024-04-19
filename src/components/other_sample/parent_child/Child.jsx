import React from 'react';

const Child = (props) => {
    // const name = props.name;
    // const country = props.country;
    const {name, country} = props;
    return (
        <>
            I am {name}, I come from {country}.
        </>
    )
}

export default Child
