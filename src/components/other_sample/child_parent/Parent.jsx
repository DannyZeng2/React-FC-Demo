import React, {useState} from 'react';
import Child from './Child';

/**
 * 子组件传子组件：
 * 1. 父组件定义状态/函数：父组件首先定义一个状态变量并提供一个函数来更新这个状态
 * 2. 父组件传递函数给子组件：父组件将更新状态的函数作为props传递给子组件
 * 3. 子组件调用函数：子组件在适当的地方调用这个函数。这会将数据传回给父组件，父组件接受数据并使用它来更新自己的状态
 */
const Parent = () => {

    const [data, setData] = useState(undefined);

    const handleChange = (text) => {
        setData(text)
    }

    return (
        <>
            <p>{data}</p>
            <Child handleChange={handleChange}/>
        </>
    );

}

export default Parent
