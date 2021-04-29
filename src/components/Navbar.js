import React, { useEffect, useState } from 'react';
import MenuS from './MenuS';
import MenuW from './MenuW';

export default function Navbar(){
    const useViewport = () => {
        const [width, setWidth] = useState(window.innerWidth);
    
        useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
        }, []);
    
        // Return the width so we can use it in our components
        return width;
    }

    const MyComponent = () => {
        const width = useViewport();
        const breakpoint = 700;
    
        return width < breakpoint ? <MenuS /> : <MenuW />;
    }

    return (
        <nav>
            <MyComponent/>
        </nav>
    );
}