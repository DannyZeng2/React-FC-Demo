import React, {useMemo, useState} from "react";
import DemoApi from "../../../api/DemoApi";
import {Input, Radio, Select} from "antd";

const UseMemo = () => {

    const [linerGroup, setLinerGroup] = useState("OOCL");

    const [value,setValue] = useState("");

    const sizeTypes = useMemo(() => {
        console.log("call api...")
        return DemoApi.loadSizeType(linerGroup)
    }, [linerGroup]);

    // console.log("call api...")
    // const sizeTypes = DemoApi.loadSizeType(linerGroup)


    return (
        <div style={{textAlign: 'left'}}>
            <Radio.Group value={linerGroup} onChange={(e) => setLinerGroup(e.target.value)}>
                <Radio.Button value="OOCL">OOCL</Radio.Button>
                <Radio.Button value="COSCO">COSCO</Radio.Button>
            </Radio.Group>
            <Select style={{width:200}}>
                {sizeTypes.map((item) => (
                    <Select.Option key={item}>{item}</Select.Option>
                ))}
            </Select>
            <br/>
            <Input value={value} onChange={(e) => setValue(e.target.value)} style={{width: '30%'}}/>
        </div>
    )


}

export default UseMemo;
