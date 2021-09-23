import { useLocation } from 'react-router-dom';

export default function Footer(){
    let year = new Date().getFullYear();

    const location = useLocation();

    function footerColor(param){
        
        switch(param.pathname){
            case '/about':
                return 'footer-about';
            case '/skills':
                return 'footer-skills';
            case '/projects':
                return 'footer-projects';
            case '/contact':
                return 'footer-contact';
            default:
                return 'footer-about';
        }
    }
    return (
        <div id="footer" className={footerColor(location)}>
            <h5>Copyright © {year} Pio</h5>
        </div>
    );
}