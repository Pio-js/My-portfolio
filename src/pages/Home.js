import { NavLink } from 'react-router-dom';
import './Home.css';
import { useState, useRef, useEffect } from 'react';

export default function Home(){


  const [hover, setHover] = useState({pointerEvents:'none'});

  useEffect(
    () => {
      setTimeout(() => {
        setHover({pointerEvents:'unset'});
      }, 4000);
    },
    []
  );
  function useHover() {
    const [value, setValue] = useState(false);//to change position style
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
      () => {
        const node = ref.current; //the node where the function is called - to set the value
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
      },
      []
    );
    return [ref, value];
  }

  const [hoverRef, isHovered] = useHover();

  let style = isHovered ? {position:'relative'} : {position:'absolute'};

  return (
      <section id='home' style={hover}>
        <div id='box-container' ref={hoverRef} >
        
          <div id='box-1' className='box' style={style}>
          <NavLink exact to='/About'>
            <div className='transp-bg'><h1 style={{color: 'purple'}}>About</h1></div>
            </NavLink>
          </div>
          
          
          <div id='box-2' className='box' style={style}>
          <NavLink exact to='/Skills'>
            <div className='transp-bg'><h1 style={{color: 'blue'}}>Skills</h1></div>
            </NavLink>
          </div>
          
          
          <div id='box-3' className='box' style={style}>
          <NavLink exact to='/Projects'>
            <div className='transp-bg'><h1 style={{color: 'green'}}>Projects</h1></div>
            </NavLink>
          </div>
          
          
          <div id='box-4' className='box' style={style}>
          <NavLink exact to='/Contact'>
            <div className='transp-bg'><h1 style={{color: 'tomato'}}>Contact</h1></div>
            </NavLink>
          </div>
          
        </div>
      </section>
  );
}
