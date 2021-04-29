import React from 'react';
import Menu from '../components/Menu';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import './Projects.css';

export default function Projects(){

    return (
        <section id="projects">
            <div className="menu-w"><Menu/></div>
            <div id="pro-container" className="page-container">
                <ImageSlider slides={SliderData} />
            </div>
        </section>
    );
}