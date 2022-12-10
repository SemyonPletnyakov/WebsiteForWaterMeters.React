import React from 'react';
import axios from 'axios';
import ActualDomenServera from '../ActualDomenServera';

const CheckForm = ({person, result}) => {
    async function checkLoad (e){
        e.preventDefault()
        let URL = ActualDomenServera.domen + '/api/Check?id=' + person.id
        console.log(URL)
        const response = await axios.post(URL)
        console.log(response.data)
        result(response.data)
    }

    return (
        <div>
            <button onClick={checkLoad}>Чек</button>
        </div>
    );
};

export default CheckForm;