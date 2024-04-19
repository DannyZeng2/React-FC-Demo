import React from 'react';

const Home = () => {

    const name = 'Danny';

    const isScopeA = true;

    const items = ['aaa','bbb','ccc'];

    return (
        <h1>
            {isScopeA && <div>Hi {name}, Welcome to Home!</div>}

            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </h1>
    );
}

export default Home;
