import React from 'react';
import { useParams } from 'react-router-dom';
import CheckResult from '../components/CheckResult';

const CheckPage = () => {
    const {id} = useParams();
    return (
        <div>
            <CheckResult checkHash={id}/>
        </div>
    );
};

export default CheckPage;