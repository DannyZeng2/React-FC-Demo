import React from 'react';
import {Card, Col, Form, Input, Row} from 'antd';
const OtherInfoPanel = (props) => {
    const {form} = props

    return (
        <Card title={'Other Info'} className={'search-page-sub-card'}>
            <Form form={form}>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item label="Supplier" name="supplier" labelCol={{span: 6}} wrapperCol={{span: 15}}>
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default OtherInfoPanel;
