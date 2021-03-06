import Menu from '../components/Menu';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../data/SliderData';
import './Projects.css';
import AnimationHome from '../components/AnimationHome';
import LightAnimation from '../components/LightAnimation';
import { useLocation } from 'react-router-dom';

export default function Projects(props){
    const location = useLocation();

    return (
        <section id="projects">
            <AnimationHome location={location}/>
            <LightAnimation/>
            <div className="menu-w"><Menu/></div>
            <div id="pro-container" className="page-container">
                <div id="projects-text">
                    <p>This are some projects of mine. Just click on the images to see more about them.</p>
                </div>
                <ImageSlider slides={SliderData} setProjectName={props.setProjectName} setTechnology={props.setTechnology} setDescription={props.setDescription} setImages={props.setImages} setGitHubLink={props.setGitHubLink}/>
            </div>
        </section>
    );
}