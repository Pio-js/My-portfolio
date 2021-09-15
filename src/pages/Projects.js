import Menu from '../components/Menu';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import './Projects.css';

export default function Projects(props){

    return (
        <section id="projects">
            <div className="menu-w"><Menu/></div>
            <div id="pro-container" className="page-container">
                <div id="projects-text">
                    <p>This are some projects of mine. Just click on the images to see more about them.</p>
                </div>
                <ImageSlider slides={SliderData} setProjectName={props.setProjectName} setTechnology={props.setTechnology} setDescription={props.setDescription} setImages={props.setImages}/>
            </div>
        </section>
    );
}