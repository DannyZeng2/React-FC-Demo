import React, { createContext, useState } from 'react';

// 创建一个Context
const MyContext = createContext('');

const UseContext = () => {
    const [value, setValue] = useState('Hello,I am from UseContext');

    return (
        <MyContext.Provider value={value}>
            <A />
        </MyContext.Provider>
    );
};

const A = () => {
    return <B />
};

const B = () => {
    return <C />;
};

const C = () => {

    return (
        <MyContext.Consumer>
            {value => <div>Component C: {value}</div>}
        </MyContext.Consumer>
    );
};

export default UseContext;
