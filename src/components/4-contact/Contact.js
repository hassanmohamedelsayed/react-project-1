import React from 'react'
import'./Contact.css'

export default function Contact() {
  return (
<section className='contact-us'>
<h1 className='title'>
  <span className='icon-envelope'></span>
  contact us
</h1>
<p className='subtitle'>Contact us for more information and get notified whem i puplish something new</p>

<div style={{justifyContent:"space-between"}} className="flex">
<form className=''>
<div className='flex'>
<label htmlFor="email">Email Adress :</label>
<input autoComplete="off" required type="email" name='' id='email'/>
</div>

<div className='flex' style={{marginTop:"24px"}}>
<label htmlFor="Message">Your Message</label>
<textarea required name="" id="name"></textarea>
  
</div>

<button className='submit'>Submit</button>
</form>
</div>
</section>  )
}
