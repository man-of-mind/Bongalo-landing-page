import React from "react";
import styles from "./card.module.scss";

interface Props {
    startGradient?: string,
    endGradient?: string,
    children?: React.ReactNode,
    bgImage: string,
    width?: string,
    height?: string
}

const CityCard:React.FC<Props> = ({startGradient, endGradient, children, bgImage, width, height}) => {
    let style = {
        width: width,
        height: height,
        backgroundImage: `linear-gradient(to left, ${startGradient}, ${endGradient}), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        borderRadius: '5px'
    }
    return (
        <div className={styles['city-details']} style={style}>
            {children}
        </div>
    );
}

export default CityCard;