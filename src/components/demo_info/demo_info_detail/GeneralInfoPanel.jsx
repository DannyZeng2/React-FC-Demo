import React from 'react';
import { Card, Col, Form, Input, Row} from 'antd';

const GeneralInfoPanel = (props) => {
    const {form} = props

    return (
        <Card title={'General Info'} className={'search-page-sub-card'}>
            <Form form={form}>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item label="Job No" name="jobNo" labelCol={{span: 6}} wrapperCol={{span: 15}}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Status" name="status" labelCol={{span: 6}} wrapperCol={{span: 15}}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default GeneralInfoPanel;
