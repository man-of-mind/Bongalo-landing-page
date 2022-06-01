import React from "react";

interface props {
    children: JSX.Element[]
}

const Carousel:React.FC<props> = ({ children }) => {
    const activeSlide = children.map(slide => { 
        return (
            <>
                {slide}
            </>
        );
    });

    
    return (
        <div style={{display: "flex"}}>
            {activeSlide}
        </div>
    );
}

export default Carousel;