import React from "react";
import styles from "./card.module.scss";

interface Props {
    startGradient: string,
    endGradient: string,
    children: React.ReactNode,
    bgImage: string
}

const CityCard:React.FC<Props> = ({startGradient, endGradient, children, bgImage}) => {
    let style = {
        width: '100%',
        height: '348px',
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