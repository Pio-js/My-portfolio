import Menu from "../components/Menu";
import { useState } from "react";
import './Project.css';

export default function Project(props) {

    const {projectName, technology, description, images} = props;
    const [popup, setPopup] = useState();

    const closeBtn = <div id='close-popup-btn' onClick={()=>setPopup()}>X</div>

    console.log(popup);

    function imgPopup(popupImg){
        setPopup(
            <div id="imgAbsolute">
                {closeBtn}
                <img id="popup-img" src={popupImg} alt='popup project preview'/>
            </div>
        );
    }

    const techIcons = technology.map((icon, key) => {
        return <img key={key} className="project-icons" src={icon} alt="tech used icon"/>
    });
    const projectImages = images.map((image, key) => {
        return <img key={key} className='project-images' src={image} alt="project preview" onClick={()=>imgPopup(image)}/>
    });

    return (
        <section id="project-page">
            <div className="menu-w"><Menu/></div>
            <div id="project-page-container" className="page-container">
                {popup}
                <h3>Project: {projectName}</h3>
                <h4>Technology used:</h4>
                <div>{techIcons}</div>
                <h4>Description</h4>
                <p>{description}</p>
                <div id="pro-img-group">
                    <h3>Click on the picture to enlarge them.</h3>
                    {projectImages}
                </div>
            </div>
        </section>
    )
}