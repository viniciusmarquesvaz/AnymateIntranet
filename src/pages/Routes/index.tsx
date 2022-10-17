import { Routes,Route } from "react-router-dom"
import { MainFirstPage } from "../../components/Pages/MainFirstPage";
import React from 'react'

 const IntranetRoutes  = () => {
    return(
    
     <Routes>
        <Route path= "/" element={<MainFirstPage/>} />
        <Route path= "/home" element={<p>oii</p>} />
  
    </Routes>
    
   
);
}
export default IntranetRoutes;
