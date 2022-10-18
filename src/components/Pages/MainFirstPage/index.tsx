import React from 'react'
import '../../../styles/backgroundMainPageStyles/background.layout.css'
import { BtnEntrace } from '../../Atoms/btnMainEntrace'
import { BtnEntrace2 } from '../../Atoms/btnMainEntrace2'
import { JobGifHomePage } from '../../Atoms/gifAnimatedJob'
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
        "Choose which of the two environments you want to enter ✏️"
      ]}
      typeSpeed={80}
      backDelay={50}
      loop={false}
      /> 
     </p>
     <BtnEntrace />
     <BtnEntrace2 />
     <JobGifHomePage/>


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
      </div>
      </>
  )
}
