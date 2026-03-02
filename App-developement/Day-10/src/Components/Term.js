import React from 'react'
import './Terms.css';

function Term() {
  return (
    <div>
    <div id='terms'>
    <h1 id='cn'><b>Terms and Conditions</b></h1>
    <h3 className='ac'>Acceptance of Terms</h3>
    <h6 className='de'>By using TravelExpenser, you agree to comply with and be bound by these terms and conditions.</h6>
    <h3 className='ac'>Account Plans</h3>
    <h6 className='de'>TravelExpenser offers free and premium account options. By registering, you agree to the terms of your selected plan.</h6>
    <h3 className='ac'>Payment</h3>
    <h6 className='de'>Payment for premium features will be processed at the time of purchase.</h6>
    <h6 className='de'>Recurring payments will be automatically charged to the payment method you provide.</h6>
    <h6 className='de'>Prices are subject to change, and any changes will be communicated in advance.</h6>
    <h3 className='ac'>Contact Information</h3>
    <h6 className='de'>For questions or concerns regarding these terms and conditions, please contact our customer support.</h6>
    <h3 className='ac'>Account Security</h3>
    <h6 className='de'>You are responsible for maintaining the security of your TravelExpenser account login information.</h6>
    <h6 className='de'>Notify us immediately if you suspect unauthorized access to your account.</h6>
    </div>
    </div>
  )
}

export default Term