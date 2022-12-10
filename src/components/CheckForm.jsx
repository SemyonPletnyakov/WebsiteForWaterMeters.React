import React, {useState} from 'react';
import axios from 'axios';
import ActualDomenServera from '../ActualDomenServera';

const CheckForm = ({person, result}) => {
    const [payLink, setPayLink] = useState("");

    async function checkLoad (e){
        e.preventDefault()
        let URL = ActualDomenServera.domen + '/api/Check?id=' + person.id
        console.log(URL)
        const response = await axios.post(URL)
        console.log(response.data)
        result(0)
        result(response.data)
    }
    async function getPayLink (e){
        e.preventDefault()
        let URL = ActualDomenServera.domen + '/api/Check/PaymentLink?id=' + person.id
        console.log(URL)
        const response = await axios.get(URL)
        console.log(response.data)
        setPayLink(response.data)
        if(response.data!=='paid'&&response.data){
            window.open(response.data, '_blank', 'noopener,noreferrer');
        }
    }

    return (
        <div>
            <button onClick={checkLoad}>Показать чек</button>
            <button onClick={getPayLink}>Оплатить</button>
            {(payLink==='paid')&&
                <div>Оплата не требуется</div>
            }
        </div>
    );
};

export default CheckForm;