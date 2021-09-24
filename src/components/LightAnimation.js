import { useEffect, useState } from 'react';
import './LightAnimation.css';

export default function LightAnimation() {

    const [bgAnim, setBgAnim] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setBgAnim(
            <div>
                <div class='light x1'></div>
                <div class='light x2'></div>
                <div class='light x3'></div>
                <div class='light x4'></div>
                <div class='light x5'></div>
                <div class='light x6'></div>
                <div class='light x7'></div>
                <div class='light x8'></div>
                <div class='light x9'></div>
            </div>
            );
        }, 2500);
    }, []);
    return bgAnim;
}
