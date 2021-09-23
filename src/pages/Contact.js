import { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import './Contact.css';
import AnimationHome from '../components/AnimationHome';
import { useLocation } from 'react-router-dom';

export default function Contact(){
    const location = useLocation();
    const [textMsg, setTextMsg] = useState()
    const submit = (e)=>{
        e.preventDefault();
        //not used until deploying
        setTextMsg(
            <div id="contact-msg">
                <p>This function is disabled</p>
            </div>
        );
        setTimeout(() => {
            setTextMsg();
        }, 3000);
    }

    return (
        <section id="contact">
            <AnimationHome location={location}/>
            <div className="menu-w"><Menu/></div>
            <div id='contact-container' className="page-container">
                <p>You find me on LinkedIn<a id="linkedin" href="https://www.linkedin.com/in/pio-saija/" target="blank"></a></p>
                <p>For every question do not hesitate to contact me!</p>
                <form onSubmit={submit}>
                    <input className="no-outline" type='text' placeholder=" Your Name" name='name' /* required *//>
                    <input className="no-outline" type="text" placeholder=" Your Email" name="email" /* required *//>
                    <textarea className="no-outline" id="subject" name="subject" placeholder="This form is disabled" style={{"height":"200px"}} /* required *//>
                    <button /* onClick={()=>message} */>Submit</button>
                    {textMsg}
                </form>
                <div id="cont-img"></div>
            </div>
        </section>
        );
}