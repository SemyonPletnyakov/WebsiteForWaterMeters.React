import React, {useMemo,useState, useRef, useEffect} from 'react';
import axios from 'axios';
import SearchResult from '../components/SearchResult';
import PersonIdForm from '../components/PersonIdForm';
import AdresSelect from '../components/AdresSelect';
import PersonAdresForm from '../components/PersonAdresForm';
import CheckForm from '../components/CheckForm';
import CheckResult from '../components/CheckResult';
import {QRCodeSVG} from 'qrcode.react';

const HomePage = () => {
    const [person, setPerson] = useState({});
  const [checkHash, setCheckHash] = useState(0);
  const [personReceive, setPersonReceive] = useState(false);
  const [checkHashReceive, setCheckHashReceive] = useState(false);

  
  const formResult = (resultPerson,resultDownload) => {
    setPerson(resultPerson)
    setPersonReceive(resultDownload)
    setCheckHashReceive(false)
  }
  const checkResult = (result)=>{
    setCheckHash(result)
    setCheckHashReceive(true)
  }

  return (
    <div className="App">
      
      <PersonIdForm result={formResult} />
      <PersonAdresForm result={formResult}/>
      {personReceive &&
        <SearchResult person={person}/>
      }
      {personReceive &&
        <CheckForm person={person} result={checkResult}/>
      }
      {checkHashReceive&&
        <CheckResult checkHash={checkHash}/>
      }
    </div>
  );
};

export default HomePage;