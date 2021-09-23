import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function MenuS(){
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
    }

    const closeMenu = (e) => {
    setNavbarOpen(e);    
    }

    return (
    <>
        <button onClick={handleToggle}>{navbarOpen? (
            null
            ): (
            <FiMenu className="no-outline nav-closed" />
            )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <button className ="close-btn" onClick={handleToggle}>{navbarOpen? (
            <MdClose className="no-outline nav-open" />
            ): (
            null
            )}
            </button>
            <NavLink exact to='/' activeClassName="active">
                <button onClick={()=>closeMenu(false)}>Home</button>
            </NavLink>

            <NavLink to='/about' activeClassName="active">
                <button onClick={()=>closeMenu(false)}>About</button>
            </NavLink>

            <NavLink to='/skills' activeClassName="active">
                <button onClick={()=>closeMenu(false)}>Skills</button>
            </NavLink>

            <NavLink to='/projects' activeClassName="active">
                <button onClick={()=>closeMenu(false)}>Projects</button>
            </NavLink>

            <NavLink to='/contact' activeClassName="active">
                <button onClick={()=>closeMenu(false)}>Contact</button>
            </NavLink>
            
        </ul>
    </>
    );
}