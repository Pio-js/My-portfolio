import { useEffect, useState } from 'react';
import Animation from '../pages/HomeCopy';

export default function AnimationHome(props){

    const location = props.location;
    /* console.log(location); */
    const [animation, setAnimation] = useState(null);

    useEffect(() => {
        if(location.state != null){
            setAnimation(<Animation/>);
        }
        setTimeout(() => {
            setAnimation(null);
        }, 2000);
        
    }, []);

    return animation;
}