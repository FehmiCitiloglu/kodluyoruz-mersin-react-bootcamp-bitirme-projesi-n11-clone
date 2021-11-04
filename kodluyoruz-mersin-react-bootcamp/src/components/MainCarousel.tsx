import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import N11Button from "./UI/N11Button";

export interface Props {
  slides: {
    image?: string;
    imageAlt?: string;
    url?: string;
    buttonText?: string;
    isArrowGonnaShown: boolean;
  }[];
}

export const MainCarousel = (props: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const carouselRef = useRef<any>();

  const nextSlide = () => {
    carouselRef.current.next();
  };
  const previousSlide = () => {
    carouselRef.current.prev();
  };

  const onMouseEnterHandle = () => {
    setIsHovered((prevState) => !prevState);
  };

  const arrowStyle: React.CSSProperties = {
    visibility: isHovered ? "visible" : "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    margin: "auto",
    background: "rgba(0, 0, 0, 0.50)",
    zIndex: 2,
    width: "4rem",
    height: "3rem",
    color: "white",
  };

  const rightArrowStyle: React.CSSProperties = {
    ...arrowStyle,
    right: 65,
  };
  const leftArrowStyle: React.CSSProperties = {
    ...arrowStyle,
    right: -65,
  };

  const titleStyle: React.CSSProperties = {
    height: "16px",
    color: "black",
    lineHeight: "50px",
    fontWeight: 700,
    fontSize: "22px",
    textAlign: "center",
    background: "#fff",
  };

  // const descStyle: React.CSSProperties = {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // background: "red",
        width: "fit-content",
      }}
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseEnterHandle}
    >
      <LeftOutlined onClick={previousSlide} style={leftArrowStyle} />

      <Carousel
        ref={carouselRef}
        autoplay
        effect="fade"
        style={{
          // background: "white",
          width: "45rem",
          height: "30rem",
          zIndex: 0,
        }}
      >
        {props.slides.map((slide: any) => (
          <div key={slide.title}>
            <img src={slide.image} alt={slide.imageAlt} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <h2
                style={{
                  margin: 0,
                }}
              >
                {slide.title}
              </h2>
              <h3 style={titleStyle}>{slide.title}</h3>
            </div>

            <div
              style={{
                position: "relative",
                top: -100,
              }}
            >
              <N11Button isArrowShown={slide.isArrowGonnaShown}>
                {slide.buttonText}
              </N11Button>
            </div>
          </div>
        ))}
      </Carousel>
      <RightOutlined onClick={nextSlide} style={rightArrowStyle} />
    </div>
  );
};
