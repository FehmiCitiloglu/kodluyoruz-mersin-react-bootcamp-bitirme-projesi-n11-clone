import React, { useRef } from "react";
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

export const SideCarousel = (props: Props) => {
  const carouselRef = useRef<any>();

  const nextSlide = () => {
    carouselRef.current.next();
  };
  const previousSlide = () => {
    carouselRef.current.prev();
  };

  const arrowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    margin: "auto",
    //background: "rgba(0, 0, 0, 0.50)",
    zIndex: 2,
    width: "2rem",
    height: "2rem",
    color: "rgba(0, 0, 0, 0.50)",
  };

  const rightArrowStyle: React.CSSProperties = {
    ...arrowStyle,
    right: 33,
  };
  const leftArrowStyle: React.CSSProperties = {
    ...arrowStyle,
    right: -33,
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
    >
      <LeftOutlined onClick={previousSlide} style={leftArrowStyle} />

      <Carousel
        ref={carouselRef}
        autoplay
        effect="fade"
        style={{
          // background: "white",
          width: "12.37rem",
          height: "31rem",
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
