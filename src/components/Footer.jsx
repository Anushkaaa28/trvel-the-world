import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";


const Footer = () => {
  return (

    <div className='footer d-flex p-3'>

    <div className='col px-5'>
        <img className='' src='./src/assets/Logo-img.png'></img>
        <p className='text-white '>Stay at our top unique properties
        From castles and villas to boats and igloos, we've got it all.  From castles and villas to boats and igloos, we've got it all. </p>
        <p className='text-white fs-5'><FaFacebook className='me-3' /><TiSocialInstagram className='me-3' /><AiFillTwitterCircle className='me-3'/></p>
    </div>


    <div className='col d-flex'>

      <div className='col rightSideFooter'>
      <h5 className='text-white'>Company</h5>      
      <p>About us</p>
      <p>News</p>
      <p>Careers</p>
      <p>How we work</p>
      </div>

      <div className='col rightSideFooter'>
      <h5 className='text-white'>Support</h5>      
      <p>Account</p>
      <p>Support center</p>
      <p>FAQ</p>
      <p>Accessibility</p>
      </div>

      <div className='col rightSideFooter'>
      <h5 className='text-white'>More</h5>      
      <p>Covid Advisory</p>
      <p>Airline fees</p>
      <p>Tips</p>
      <p>Quarantine Rules</p>
      </div>

    </div>
    
    
    
    
  </div>
  )
}

export default Footer