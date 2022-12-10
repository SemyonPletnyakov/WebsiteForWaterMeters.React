
import React, {useMemo,useState, useRef, useEffect} from 'react';
import axios from 'axios';
import SearchResult from './components/SearchResult';
import PersonIdForm from './components/PersonIdForm';
import AdresSelect from './components/AdresSelect';
import PersonAdresForm from './components/PersonAdresForm';
import CheckForm from './components/CheckForm';
import CheckResult from './components/CheckResult';
import {QRCodeSVG} from 'qrcode.react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CheckPage from './pages/CheckPage';
//тест коммент
function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="check/:id" element={<CheckPage/>}/>
      </Routes>
  );

}

export default App;