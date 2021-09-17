import Menu from "../components/Menu";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Project.css';

export default function Project(props) {
    const history = useHistory();

    const {projectName, technology, description, images} = props;
    const [popup, setPopup] = useState();

    /* const [current, setCurrent] = useState(0);
    const length = images.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || images.length <= 0) {
        return null;
    } */

    const closeBtn = <div id='close-popup-btn' onClick={()=>setPopup()}>X</div>

    console.log(popup);

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
                    <div></div>
                </div>
            </div>
        );
    }

    const techIcons = technology.map((icon, key) => {
        return <img key={key} className="project-icons" src={icon} alt="tech used icon"/>
    });
    const projectImages = images.map((image, key) => {
        
        return  (
            <div className="project-img-container">
                <img key={key} className='project-images' src={image.image} alt="project preview" onClick={()=>imgPopup(image.image, image.desc)}/>
            </div>
        );
    });

    return (
        <section id="project-page">
            <div className="menu-w"><Menu/></div>
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
                <h3 id="project-back-btn" onClick={()=>history.goBack()}>Back</h3>
            </div>
        </section>
    )
}