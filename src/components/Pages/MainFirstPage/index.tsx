import React from 'react'
import '../../../styles/backgroundMainPageStyles/background.layout.css'
import { BtnEntrace } from '../../Atoms/btnMainEntrace'

export const MainFirstPage= ()   => {
  return (
    <div className="background-wrapper">
     <div className="skewed-bg">
	<div className="content">
		<h1 className="title">Cyber Intranet</h1>
     <p className="text">Click in the button to enter in the workSpace.</p>   
    <BtnEntrace/>
	</div>
</div>

<footer className="footer">
	<p className="credits">
    Vinícius Marques
    <a className="link" href="https://www.linkedin.com/in/vin%C3%ADciusmarquesvaz/">@Vini</a>
  </p>
</footer>
</div>
  )
}
