import React, {
    useEffect, useState
} from 'react';
import {Select, Radio} from 'antd';
import DemoApi from '../../../api/DemoApi';
const UseEffect = () => {
    const [linerGroup, setLinerGroup] = useState('OOCL');
    const [sizeType, setSizeType] = useState([]);

    useEffect(() => {
        const sizeType = DemoApi.loadSizeType(linerGroup)
        setSizeType(sizeType)
        return () => {
            setSizeType([])
        };
    }, [linerGroup]);

    return (
        <>
            <Radio.Group value={linerGroup} onChange={(e) => setLinerGroup(e.target.value)}>
                <Radio.Button value="OOCL">OOCL</Radio.Button>
                <Radio.Button value="COSCO">COSCO</Radio.Button>
            </Radio.Group>
            <Select style={{width: 200}}>
                {sizeType.map((item) => (
                    <Select.Option key={item}>{item}</Select.Option>
                ))}
            </Select>
        </>
    );
}

export default UseEffect
