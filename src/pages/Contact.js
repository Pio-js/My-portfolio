import Menu from '../components/Menu';
import './Contact.css';

export default function Contact(){
    const submit = ()=>{

    }
    return (
        <section id="contact">
            <div className="menu-w"><Menu/></div>
            <div id='contact-container' className="page-container">
                <p>You find me on LinkedIn<a id="linkedin" href="https://www.linkedin.com/in/pio-saija/" target="blank"></a></p>
                <p>For every question do not hesitate to contact me!</p>
                <form onSubmit={submit}>
                    <input className="no-outline" type='text' placeholder=" Your Name" name='name' required/>
                    <input className="no-outline" type="text" placeholder=" Your Email" name="email" required/>
                    <textarea className="no-outline" id="subject" name="subject" placeholder=" Write something.." style={{"height":"200px"}}/>
                    <button>Submit</button>
                </form>
                <div id="cont-img"></div>
            </div>
        </section>
        );
}