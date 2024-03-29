import React from 'react';
import SearchCriteria from './SearchDemoInfoCriteriaPanel';
import SearchResult from './SearchDemoInfoResultPanel';
import {Helmet} from 'react-helmet';
import {Card} from 'antd';

const SearchDemoInfoPanel = () => {

    return (
        <>
            <Helmet>
                <title>Search Demo Info</title>
            </Helmet>
            <Card title={'Search Demo Info'} className={'card-title search-page-card'}>
                <SearchCriteria/>
                <SearchResult/>
            </Card>
        </>
    )
}

export default SearchDemoInfoPanel;
