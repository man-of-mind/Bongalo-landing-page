import React, { useRef } from "react";
import styled from "styled-components";
import next from "../../assets/images/next.svg";
import useWindowDimensions from "../hook";
import position from "../../assets/images/location2.svg";

interface props {
    sliders: Array<any>
}

interface Sprops {
    minWidth: string
}

const SPlaceDetail = styled.div<Sprops>`
    margin-top: 34px;
    display: block;
    margin-right: 20px;
    min-width: ${props => props.minWidth};
    max-width: 275px;
`;

const Simg = styled.img`
    width: 100%;
`;

const SButton = styled.button`
    outline: none;
    border: none;
    border-radius: none;
    background: none;
    position: absolute;
    right: 35px;
`;

const SLocation = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
`;


const Sdesc = styled.span`
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`;

const Sname = styled.span`
    padding-left: 5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: rgba(18, 23, 30, 0.654531);
`;

interface placeProps {
    img: string,
    locationDesc: string
}

export const Place:React.FC<placeProps> = ({ img, locationDesc }) => {
    const { width } = useWindowDimensions();
    let minWidth = ""
    if (width < 768) {
        minWidth = "185px"
    }
    else minWidth = "250px"
    return (
        <SPlaceDetail minWidth={minWidth}>
            <Simg src={img} alt="amazing place" ></Simg>
            <Sdesc>{locationDesc}</Sdesc>
            <SLocation>
                <img src={position} alt="location icon"></img>
                <Sname>Gisozi , Kigali</Sname>
            </SLocation>
        </SPlaceDetail>
    )
};


export const Carousel2:React.FC<props> = ({ sliders }) => {
    interface Cprops {
        margin: string
    }
    let margin = ""
    const SContainer = styled.div<Cprops>`
    display: flex;
    align-items: center;
    margin-left: ${props => props.margin};
    margin-right: 0px;
    justify-items: center;
    margin-bottom: 70px;
`;

    const SCarouselSlides = styled.div`
        display: flex;
        transition: all 0.5s ease;
        max-width: calc(100% - 40px);
        overflow-y: hidden;
        -ms-overflow-style: none;  
        scrollbar-width: none; 
        &:-webkit-scrollbar {
            display: none;
    }
    `;

    const { width } = useWindowDimensions();
    
    if (width > 1100) {
        margin = "70px"
    }
    else {
        margin = "30px";
    }
 
    const listRef:any = useRef(null);
   
    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                top: 0,
                left: 200,
                behavior: "smooth",
            });
        }
    };
    return (
        <div>
            <SContainer margin={margin}>
                <SCarouselSlides ref={listRef}>
                    {sliders.map((item, index) => {
                            return <Place img={item.img} locationDesc={item.text} key={index}/>
                        }
                    )}
                </SCarouselSlides>
                <SButton onClick={scrollRight}>
                    <img src={next} alt="next icon"></img>    
                </SButton>
            </SContainer>
        </div>
    );
}