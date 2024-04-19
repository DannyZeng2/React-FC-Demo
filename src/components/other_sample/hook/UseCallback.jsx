import React, {useCallback, useEffect, useState} from 'react';
import DemoApi from '../../../api/DemoApi';
import { Radio, Select} from 'antd';

const UseCallback = () => {

    const [linerGroup, setLinerGroup] = useState('OOCL');

    const [sizeTypes, setSizeTypes] = useState([]);

    const getSizeType = useCallback(() => {
        return DemoApi.loadSizeType(linerGroup)
    },[linerGroup])

    useEffect(() => {
        setSizeTypes(getSizeType())
        console.log('render...')
    }, [getSizeType]);

    return (
        <div>
            <Radio.Group value={linerGroup} onChange={(e) => setLinerGroup(e.target.value)}>
                <Radio.Button value="OOCL">OOCL</Radio.Button>
                <Radio.Button value="COSCO">COSCO</Radio.Button>
            </Radio.Group>
            <Select style={{width: 200}}>
                {sizeTypes.map((item) => (
                    <Select.Option key={item}>{item}</Select.Option>
                ))}
            </Select>
        </div>
    )

}

export default UseCallback;
