import {NavLink} from 'react-router-dom';
import Button from './Button';

export default function MenuW(){
    return (
    <>
        <NavLink exact to='/' className="nav-btn" activeClassName="active">Home</NavLink>
        <NavLink exact to='/About' className="nav-btn" activeClassName="active">About</NavLink>
        <NavLink exact to='/Skills' className="nav-btn" activeClassName="active">Skills</NavLink>
        <NavLink exact to='/Projects' className="nav-btn" activeClassName="active">Projects</NavLink>
        <NavLink exact to='/Contact' className="nav-btn" activeClassName="active">Contact</NavLink>
    </>
    );
}