import React, {useEffect} from 'react';
import {Button, Form, Space} from 'antd';
import GeneralInfoPanel from './GeneralInfoPanel';
import OtherInfoPanel from './OtherInfoPanel';
import {Helmet} from 'react-helmet';
import Card from 'antd/lib/card/Card';
import DemoApi from '../../../api/DemoApi';

const DemoInfoDetailPanel = () => {

    const [generalForm] = Form.useForm();
    const [detailForm] = Form.useForm();

    const handleSubmit= () => {
        const requestBody = {
            generalInfo: generalForm.getFieldsValue(),
            detailInfo: detailForm.getFieldsValue()
        }
        console.log(requestBody)
        // do submit action
    }

    const initFormData = () => {
        const demoDetails = DemoApi.loadDemoDetails()
        generalForm.setFieldsValue(demoDetails.generalInfo);
        detailForm.setFieldsValue(demoDetails.detailInfo);
    }

    useEffect(() => {
        initFormData();
    });

    return (
        <>
            <Helmet>
                <title>Demo Info Detail</title>
            </Helmet>
            <Card title={'Demo Info Detail'} className={'card-title search-page-card'}>
                <GeneralInfoPanel form={generalForm}/>
                <OtherInfoPanel form={detailForm}/>

                <Space style={{float: 'right'}}>
                    <Button type={'primary'} onClick={handleSubmit}>Submit</Button>
                </Space>
            </Card>

        </>
    )
}

export default DemoInfoDetailPanel;
