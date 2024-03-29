import React, {
    useEffect, useState
} from 'react';
import {Select} from 'antd';
import DemoApi from "../../../api/DemoApi";
const UseEffect = () => {
    const [sizeType, setSizeType] = useState([]);

    useEffect(() => {
        console.log('useEffect start...')
        const sizeType = DemoApi.loadSizeType("OOCL")
        setSizeType(sizeType)
        return () => {
            console.log('useEffect end...')
            setSizeType([])
        };
    }, []);

    console.log('rendering...');
    return (
        <>
            <Select style={{width:200}}>
                {sizeType.map((item) => (
                    <Select.Option key={item}>{item}</Select.Option>
                ))}
            </Select>
        </>
    );
}

export default UseEffect
