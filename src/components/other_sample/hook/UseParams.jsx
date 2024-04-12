import React from 'react';
import {useParams} from "react-router-dom";

const UseParams = () => {
    const { id} = useParams();

    return <div>User ID: {id}</div>

};

export default UseParams;
