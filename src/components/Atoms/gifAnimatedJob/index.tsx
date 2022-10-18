import '../../../styles/backgroundMainPageStyles/background.gif.css'
import React from 'react'
import JobGif from '../../../assets/gifs/Metrics.gif' 


export const JobGifHomePage   = () =>  {
  return (
  
    <div className='ContainerGif' >
     <img  src={JobGif} alt="wait until the page loads"></img>
    </div>
  )
}