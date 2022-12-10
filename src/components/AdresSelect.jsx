import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const AdresSelect = (props) => {
    const [mas, setMas] = useState([]);
    async function downloadMas(){
        if(props.url.length>0){
            const response = await axios.get(props.url)
            console.log("Проверка axis")
            console.log(response.data)
            setMas(response.data)
            
        }
        else{
            setMas([])
        }
    }
   useEffect(()=>{
        downloadMas();
    },[props.url])
    return (
            <select {...props}>
                <option selected>Выберите {props.nameSelect}</option>
                {mas.map((m)=>
                    <option>{m}</option>
                    )
                }
            </select>
    );
};

export default AdresSelect;