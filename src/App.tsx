import './styles/global.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IntranetRoutes from './pages/Routes';

function App()  {
  return(
    <BrowserRouter>
    <IntranetRoutes/>
    </BrowserRouter>
  )
}

export default App;
