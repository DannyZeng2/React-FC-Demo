import React, {useState} from 'react';
import { Input} from 'antd';

const Child = (props) => {
    const {handleChange} = props
    const [value, setValue] = useState(undefined);

    const onValueChange = (e) => {
        handleChange(e.target.value)
    }

    return (
        <>
            <Input value={value} onChange={onValueChange} className="input" />
        </>
    );
}

export default Child
