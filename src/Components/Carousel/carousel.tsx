import React from "react";
import styled, { css } from "styled-components";
import place1 from "../../assets/images/place1.svg";
import bed from "../../assets/images/bed.svg";
import shower from "../../assets/images/shower.svg";


interface ICarouselSlide {
  active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;

interface props {
    children: JSX.Element[]
}

const SContainer = styled.div`
    align-items: center;
    display: flex;
    margin-left: 69px;
    margin-right: 71px;
`;

const SPlaceDetail = styled.div`
    margin-top: 34px;
    display: block;
`;

const Simg = styled.img`
    width: 100%;
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
    margin-right: auto;
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

interface ICarouselProps {
    currentSlide: number;
}
  

export const Place = () => (
    <SPlaceDetail>
      <Simg src={place1} alt="feature place"></Simg>
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
  );


export const Carousel:React.FC<props> = ({ children }) => {
//    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [slides, setSlides] = React.useState([0,1,2]);
    const activeSlide = children.map((slide, index) => { 
        return (
            <SCarouselSlide active={ slides.indexOf(index) !== -1} key={index}>
                {slide}
            </SCarouselSlide>
        );
    });

    const SCarouselSlides = styled.div<ICarouselProps>`
    display: flex;
    ${props =>
        props.currentSlide &&
        css`
        transform: translateX(-${props.currentSlide * 100}%);
        `};
    transition: all 0.5s ease;
    `;
    
    return (
        <div>
            <SContainer>
                {activeSlide}
            </SContainer>
            <button
                onClick={() => {
//                    setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
                }}>
                Left
            </button>
            <button
                onClick={() => {
                    const current = slides.map(element => {
                        return (element + 1) % slides.length
                    })
                    console.log(current)
                    setSlides(current)
 //                   setCurrentSlide((currentSlide + 1) % activeSlide.length);
                }}>
                Right
            </button>
      </div>
    );
}