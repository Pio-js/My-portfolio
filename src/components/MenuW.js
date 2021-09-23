import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MenuW(){

    const location = useLocation();

    function navColor(param){
        
        switch(param.pathname){
            case '/about':
                return "nav-btn about-btn";
            case '/skills':
                return "nav-btn skills-btn";
            case '/projects':
                return "nav-btn projects-btn";
            case '/contact':
                return "nav-btn contact-btn";
            default:
                return "nav-btn about-btn";
        }
    }

    return (
    <>
        <NavLink exact to='/' className={navColor(location)} activeClassName="active">Home</NavLink>
        <NavLink to='/about' className={navColor(location)} activeClassName="active">About</NavLink>
        <NavLink to='/skills' className={navColor(location)} activeClassName="active">Skills</NavLink>
        <NavLink to='/projects' className={navColor(location)} activeClassName="active">Projects</NavLink>
        <NavLink to='/contact' className={navColor(location)} activeClassName="active">Contact</NavLink>
    </>
    );
}