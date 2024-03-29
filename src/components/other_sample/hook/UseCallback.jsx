import React, {useCallback, useEffect, useMemo, useState} from "react";
import DemoApi from "../../../api/DemoApi";
import {Input, Radio, Select} from "antd";

const UseCallback = () => {

    const [linerGroup, setLinerGroup] = useState("OOCL");
    const [sizeType, setSizeType] = useState([]);

    const loadSizeTypes = useCallback(() => {
        console.log("call api...")
        const sizeTypes =  DemoApi.loadSizeType(linerGroup)
        setSizeType(sizeTypes)
    }, [linerGroup]);

    useEffect(() => {
        loadSizeTypes()
    }, [loadSizeTypes]);


    return (
        <div style={{textAlign: 'left'}}>
            <Radio.Group value={linerGroup} onChange={(e) => setLinerGroup(e.target.value)}>
                <Radio.Button value="OOCL">OOCL</Radio.Button>
                <Radio.Button value="COSCO">COSCO</Radio.Button>
            </Radio.Group>
            <Select style={{width:200}}>
                {sizeType.map((item) => (
                    <Select.Option key={item}>{item}</Select.Option>
                ))}
            </Select>
        </div>
    )


}

export default UseCallback;
