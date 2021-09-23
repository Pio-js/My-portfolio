import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import './Project.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default function Project(props) {
    const history = useHistory();

    const {projectName, technology, description, images} = props;
    const [popup, setPopup] = useState();
    const [current, setCurrent] = useState();
    const length = images.length;

    const closeBtn = <div id='close-popup-btn' onClick={()=>setPopup()}>X</div>
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    function imgPopup(popupImg, popupDesc){

        setPopup(
            <div id="popup-absolute">
                <div id="popup-container">
                    {closeBtn}
                    <div id="close-popup-btn-bg"></div>
                    <div id="img-absolute">
                        <div id="popup-img-container">
                            <img id="popup-img" src={popupImg} alt='popup project preview'/>
                        </div>
                    </div>
                    <h2 id="popup-img-desc">{popupDesc}</h2>
                    {length > 1 ? 
                    <>
                    <MdKeyboardArrowLeft className='popup-left-arrow' onClick={prevSlide} />
                    <MdKeyboardArrowRight className='popup-right-arrow' onClick={nextSlide} />
                    <div id="popup-left-arrow-bg"></div>
                    <div id="popup-right-arrow-bg"></div>
                    </>
                    :
                    null}
                </div>
            </div>
        );
    }

    useEffect(() => {
        if(current >= 0){
            imgPopup(images[current].image, images[current].desc);
        }
    }, [current]);

    const techIcons = technology.map((icon, key) => {
        return <img key={key} className="project-icons" src={icon} alt="tech used icon"/>
    });
    const projectImages = images.map((image, index) => {
        return  (
            <div key={index} className="project-img-container">
                <img className='project-images' src={image.image} alt="project preview" onClick={()=>{imgPopup(image.image, image.desc); setCurrent(index)}}/>
            </div>
        );
    });

    return (
        <section id="project-page">
            <Menu/>
            <div id="project-page-container" className="page-container">
                {popup}
                <h2 id="project-title">Project: {projectName}</h2>
                <div id="tech">
                    <h4>Technology used:</h4>
                    <div>{techIcons}</div>
                </div>
                <div id="project-full-description">
                    <h4>Description</h4>
                    <p>{description}</p>
                </div>
                <div id="project-img-preview">
                    <h3>Click on a picture to enlarge it.</h3>
                    <div id="pro-img-group">
                        {projectImages}
                    </div>
                </div>
                {/* button back - should be history.goBack() - but page project will have the same state lor location */}
                <h3 id="project-back-btn" onClick={()=>history.push('./projects')}>Back</h3>
            </div>
        </section>
    )
}