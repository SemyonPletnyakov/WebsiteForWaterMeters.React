import React, {useMemo,useState, useRef, useEffect} from 'react';
import {QRCodeSVG} from 'qrcode.react';
import axios from 'axios';
import ActualDomenServera from '../ActualDomenServera';

const CheckResult = ({checkHash}) => {

    const [check, setCheck] = useState({});

    async function checkLoad (){
        let URL = ActualDomenServera.domen + '/api/Check?hash=' + checkHash
        const response = await axios.get(URL)
        setCheck(response.data)
        console.log(response.data)
    }

    
    useEffect(()=>{
        console.log("Загрузка чека")
        checkLoad();
    },[checkHash])

    if(check.paymentStatus){
        return (
            <table style={{border:'1px solid black', padding:'5px'}}>
                <tr><td colspan="2" style={{textAlign:'center'}}>Чеееек</td></tr>
                <tr><td style={{textAlign:'left'}}>ФН</td><td style={{textAlign:'right'}}>{check.fn}</td></tr>
                <tr><td style={{textAlign:'left'}}>Имя ОФД</td><td style={{textAlign:'right'}}>{check.ofdName}</td></tr>
                <tr><td style={{textAlign:'left'}}>ОФД ИНН</td><td style={{textAlign:'right'}}>{check.innOfd}</td></tr>
                <tr><td style={{textAlign:'left'}}>ИНН компании</td><td style={{textAlign:'right'}}>{check.innCompany}</td></tr>
                <tr><td style={{textAlign:'left'}}>Номер документа</td><td style={{textAlign:'right'}}>{check.documentNumber}</td></tr>
                <tr><td style={{textAlign:'left'}}>Номер смены</td><td style={{textAlign:'right'}}>{check.smenaNumber}</td></tr>
                <tr><td style={{textAlign:'left'}}>Индекс документа</td><td style={{textAlign:'right'}}>{check.documentIndex}</td></tr>
                <tr><td style={{textAlign:'left'}}>Дата выдачи</td><td style={{textAlign:'right'}}>{check.date}</td></tr>
                <tr><td style={{textAlign:'left'}}>ФП</td><td style={{textAlign:'right'}}>{check.fp}</td></tr>
                <tr><td style={{textAlign:'left'}}>Лицевой счёт</td><td style={{textAlign:'right'}}>{check.ls}</td></tr>
                <tr><td style={{textAlign:'left'}}>Название услуги</td><td style={{textAlign:'right'}}>{check.uslugaName}</td></tr>
                <tr><td style={{textAlign:'left'}}>Цена</td><td style={{textAlign:'right'}}>{check.price}</td></tr>
                <tr><td colspan="2" style={{textAlign:'center'}}><QRCodeSVG value={ActualDomenServera.domenClient+"check/"+check.id} /></td></tr>
            </table>
        );
    }
    else return (<div>Услуга не оплачена</div>);
};
/*  {check.STATUS.params.OD_PARAMS}</td>
    {check.STATUS.params.positions} */


export default CheckResult;