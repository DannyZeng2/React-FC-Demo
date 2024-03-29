import React from 'react';
import {Button, Card, Col, Form, Input, Row, Space} from 'antd';
import {
    DemoInfoConnector} from '../DemoInfoConnector.jsx';

const SearchDemoInfoCriteriaPanel = (props) => {
    const {searchDemoResult,addDemoResult} = props

    const [form] = Form.useForm();

    const handleReset = () => {
        form.resetFields()
    }

    const handleSearch = () => {
        const criteria = form.getFieldsValue()
        searchDemoResult(criteria)
    }

    const handleAdd = () => {
        const criteria = form.getFieldsValue()
        addDemoResult(criteria)
    }

    return (
        <Card title={'Search Criteria'} className={'search-page-sub-card'}>
            <Form form={form}>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item label="Username" name="username" labelCol={{span: 6}} wrapperCol={{span: 15}}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Age" name="age" labelCol={{span: 6}} wrapperCol={{span: 15}}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item label="Gender" name="gender" labelCol={{span: 6}} wrapperCol={{span: 15}}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Department" name="department" labelCol={{span: 6}} wrapperCol={{span: 15}}>
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Space style={{float: 'right'}}>
                    <Form.Item>
                        <Button onClick={handleReset}>Reset</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={handleSearch}>Search</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={handleAdd}>Add</Button>
                    </Form.Item>
                </Space>

            </Form>
        </Card>

    );
}

export default DemoInfoConnector(SearchDemoInfoCriteriaPanel);
