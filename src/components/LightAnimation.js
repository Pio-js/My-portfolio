import { useEffect, useState } from 'react';
import './LightAnimation.css';

export default function LightAnimation() {

    const [bgAnim, setBgAnim] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setBgAnim(
            <div>
                <div className='light x1'></div>
                <div className='light x2'></div>
                <div className='light x3'></div>
                <div className='light x4'></div>
                <div className='light x5'></div>
                <div className='light x6'></div>
                <div className='light x7'></div>
                <div className='light x8'></div>
                <div className='light x9'></div>
            </div>
            );
        }, 1500);
    }, []);
    return bgAnim;
}
