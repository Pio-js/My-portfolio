import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import './About.css';
import AnimationHome from '../components/AnimationHome';
import { useLocation } from 'react-router-dom';

export default function About(){
    const location = useLocation();

    return (
        <section id="about">
            <AnimationHome location={location}/>
            <div className="menu-w"><Menu/></div>
            <div id="about-container" className="page-container">
                <div id="my-pic" className="slide-in-top"></div>
                <p className="slide-in-right">Hi Everyone! I am <b>Pio</b>, based in Berlin. Last year I decided finally to change my job and I took part at <b><i>a full stack web developer course</i></b>. I like coding and challenging with new stuff.
                <br></br>
                <br></br>
                In the past I did several web sites with <b>Wordpress</b> creating <i>layout, design and content</i>. Sometimes I created some graphic works.
                </p>
                <p>
                    <b style={{fontSize: '2em', color: 'yellow', textAlign: 'center'}}>Work in Progress</b>
                </p>
            </div>
        </section>
    );
}