import React from 'react';
import Child from './Child';

// 父组件传子组件: 将父组件的值通过props传给子组件即可
const Parent = () => {
    return (
        <>
            <Child name={'danny'} country={'China'}></Child>
        </>
    )

}

export default Parent
