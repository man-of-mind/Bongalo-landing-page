import React, { useRef } from "react";
import styled from "styled-components";
import bed from "../../assets/images/bed.svg";
import shower from "../../assets/images/shower.svg";
import next from "../../assets/images/next.svg";
import prev from "../../assets/images/prev.svg";
import useWindowDimensions from "../hook";

interface props {
    sliders: Array<any>
}

interface Sprops {
    minWidth: string
}

const SPlaceDetail = styled.div<Sprops>`
    margin-top: 34px;
    display: block;
    margin-right: 25px;
    min-width: ${props => props.minWidth};
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
    right: 30px;
`;

const SLeftButton = styled.button`
    outline: none;
    border: none;
    border-radius: none;
    background: none;
    position: absolute;
    left: 30px;
`;

const SRoomName = styled.div`
    margin-top: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
`;

const SName = styled.div`
    margin-right: auto;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`;

const SRoom = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: rgba(18, 23, 30, 0.654531);
`;

const SPriceIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
`;

const SPerNight = styled.div`
    padding-top: 10px;
`;

const Sdesc = styled.span`
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #000000;
`;

const SIcons = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(18, 23, 30, 0.654531);
`;

interface placeProps {
    img: string
}

export const Place:React.FC<placeProps> = ({ img }) => {
    const { width } = useWindowDimensions();
    let minWidth = ""
    if (width < 768) {
        minWidth = "185px"
    }
    else minWidth = "250px"
    return (
        <SPlaceDetail minWidth={minWidth}>
        <Simg src={img} alt="feature place" ></Simg>
        <SRoomName>
            <SName>SCI Shalismi</SName>
            <SRoom>Room</SRoom>
        </SRoomName>
        <SPriceIcon>
            <SPerNight>
                <Sdesc>$120</Sdesc><em>/night</em>
            </SPerNight>
            <SIcons>
                <>3</>
                <img src={bed} alt="bed icon"></img>
                <>7</>
                <img src={shower} alt="bathroom"></img>
            </SIcons>
        </SPriceIcon>
        </SPlaceDetail>
    )
};


export const Carousel:React.FC<props> = ({ sliders }) => {
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
        max-width: calc(100% - 35px);
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

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                top: 0,
                left: -200,
                behavior: "smooth",
            });
        }
    };
    return (
        <div>
            <SContainer margin={margin}>
                <SLeftButton onClick={scrollLeft}>
                    <img src={prev} alt="next icon"></img>    
                </SLeftButton>
                <SCarouselSlides ref={listRef}>
                    {sliders.map((item, index) => {
                            return <Place img={item} key={index}/>
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