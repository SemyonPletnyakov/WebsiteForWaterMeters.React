import React from 'react';
import {useMemo,useState, useRef, useEffect} from 'react';
import AdresSelect from './AdresSelect';
import axios from 'axios';
import ActualDomenServera from '../ActualDomenServera';

const PersonAdresForm = ({result}) => {
    
    const [gorod, setGorod] = useState("");
    const [urlGoroda, setUrlGoroda]=useState(ActualDomenServera.domen + "/api/Meters/Goroda")
    const [ulica, setUlica] = useState("");
    const [urlUlici, setUrlUlici]=useState("")
    const [dom, setDom] = useState("");
    const [urlDoma, setUrlDoma]=useState("")
    const [kvartira, setKvartira] = useState("");
    const [urlKvartiry, setUrlKvartiry]=useState("")
    function gorodChange (e){
        var a = e.target.value
        setGorod(a)
        setUrlUlici((ActualDomenServera.domen + "/api/Meters/Ulici?gorod="+a).replaceAll(' ', '%20'))
        setUlica("")
        setDom("")
        setUrlDoma("")
        setKvartira("")
        setUrlKvartiry("")
    }
    function ulicaChange(e){
        var a = e.target.value
        setUlica(a)
        setDom("")
        setUrlDoma((ActualDomenServera.domen + "/api/Meters/Doma?gorod="+gorod+"&ulica="+a).replaceAll(' ', '%20'))
        setKvartira("")
        setUrlKvartiry("")
    }
    function domChange(e){
        var a = e.target.value
        setDom(a)
        setKvartira("")
        setUrlKvartiry((ActualDomenServera.domen + "/api/Meters/Kvartiry?gorod="+gorod+"&ulica="+ ulica+"&dom="+a).replaceAll(' ', '%20'))
    }
    function kvartiraChange(e){
        var a = e.target.value
        setKvartira(a)
    }
    async function adresFind(e)  {
        e.preventDefault()
        result({},false)
        let URL = (ActualDomenServera.domen + "/api/Meters/Adres?gorod="+gorod+"&ulica="+ulica+"&dom="+dom+"&kvartira="+kvartira).replaceAll(' ', '%20')
        console.log(URL)
        const response = await axios.get(URL)
        if(response.data) result(response.data,true)
        console.log(response.data)
    }
    return (
        <form action="">
            Поиск по адресу
            <AdresSelect url={urlGoroda} onChange={gorodChange} nameSelect="Город"/>
            <AdresSelect url={urlUlici} onChange={ulicaChange} nameSelect="Улицу"/>
            <AdresSelect url={urlDoma} onChange={domChange} nameSelect="Дом"/>
            <AdresSelect url={urlKvartiry} onChange={kvartiraChange} nameSelect="Квартиру"/>
            <button onClick={adresFind}>Отправить</button>
        </form>
    );
};

export default PersonAdresForm;