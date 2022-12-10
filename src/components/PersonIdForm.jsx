import React, {useMemo,useState, useRef, useEffect} from 'react';
import axios from 'axios';
import ActualDomenServera from '../ActualDomenServera';

const PersonIdForm = ({result}) => {
    
const [id, setId] = useState(100003751);
  
const inputIdChange = (e) => {
    setId(e.target.value)
}

async function idFind(e)  {
    e.preventDefault()
    result({},false)
    let URL =  ActualDomenServera.domen + '/api/Meters?id=' + id
    console.log(URL)
    const response = await axios.get(URL)
    if(response.data) result(response.data,true)
    console.log(response.data)
}

return(
    <form action="">
        Поиск по лицевому счёту:
        <input onChange={inputIdChange}/>
        <button onClick={idFind}>Отправить</button>
    </form>
);
};

export default PersonIdForm;