import React from 'react'
import '../../../styles/backgroundMainPageStyles/background.layout.css'
import Typed from 'react-typed'


export const MainFirstPage= ()   => {
  return (
    <><div className="context">
      <h1>
      <Typed
      strings={[
            "Welcome to IntranetPage",
          ]}
          typeSpeed={50}
          loop={false}
          startDelay={10}
        />
        </h1>
     <p>
     <Typed
      strings={[
        "Click the button to enter the environment",
        ""
      ]}
      typeSpeed={50}
      backSpeed={50}
      startDelay={50}
      loop
    /> 
     </p>
    </div><div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div></>
  )
}
