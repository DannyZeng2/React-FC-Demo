import React from 'react';
import {Card, Table} from 'antd';
import {DemoInfoConnector} from '../DemoInfoConnector';

const columns = [
    {
        title: 'User Name',
        dataIndex: 'username',
        width: 120,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 120,
    }, {
        title: 'Gender',
        dataIndex: 'gender',
        width: 120,
    },
    {
        title: 'Department',
        dataIndex: 'department',
        width: 120,
    }
]

const SearchDemoInfoResultPanel = (props) => {

    const {demoResult} = props;

    return (
        <Card title={'Search Result'} className={'search-page-sub-card'}>
            <Table
                columns={columns}
                dataSource={demoResult}
            />
        </Card>
    )
}

export default DemoInfoConnector(SearchDemoInfoResultPanel);
