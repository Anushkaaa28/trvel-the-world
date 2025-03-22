import React from 'react'

const ContactForm = () => {
  return (
<>
<div className=' contactFormBg'>
    {/* <img src='./src/assets/ContactFormBg.png' width={"100%"} ></img> */}
    <div  className=' text-center pt-5' style={{ height:"490px", width:"100%"}}>
    <h6 className='text-uppercase text-primary pt-4'>subscribe to our newsletter</h6>
    <h5 className=''>Get weekly updates</h5>

    <div className='mt-4'>

        <form className=' bg-white p-3 rounded mx-auto' style={{width:"400px"}}>
        <fieldset className='mb-3'>Fill your details to join party!</fieldset>
        <div class="mb-3">
            <input type="password" class="form-control p-2" id="exampleInputPassword1" placeholder='Your name'/>
        </div>
        <div class="mb-3">
            <input type="email" class="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'/>
        </div>
        
        <button type="submit" class="btn text-white px-5 btn-warning">Submit</button>
        </form>
    </div>
    </div>
</div>

    </>
  )
}

export default ContactForm