import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'

function App(){
useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
     setshow(true)
    }else{
      setshow(false)

    }
  })
})
 const [show, setshow] = useState(false);
  return (
<div id='up' className='container'>
<Header />


<Hero/>
<div className="line"/>
<Main/>
<div className="line"/>
<Contact/>
<div className="line"/>

<Footer/>
{show &&
(

<a href="#up">
<button className='icon-keyboard_arrow_up scroll'></button>

</a>
)

}

</div>

  )
}

export default App;
