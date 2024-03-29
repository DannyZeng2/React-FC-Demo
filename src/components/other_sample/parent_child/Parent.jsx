import { Input} from 'antd';
import React, {useState} from 'react';
import Child from './Child';

// 父组件传子组件: 将父组件的值通过props传给子组件即可
const Parent = () => {

    const [value, setValue] = useState(undefined)
    const onValueChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <div>
                <Input value={value} onChange={onValueChange} className="input" />
            </div>
            <div style={{paddingTop: 10}}>
                <Child value={value}></Child>
            </div>
        </>
    )

}

export default Parent
