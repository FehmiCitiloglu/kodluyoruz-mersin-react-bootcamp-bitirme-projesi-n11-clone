import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export interface Props {
  slides: {
    image?: string;
    imageAlt: string;
    url?: string;
  }[];
}

export const MainPageCarousel = (props: Props) => {
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div>
      <RightOutlined />
      <Carousel autoplay effect="fade">
        {props.slides.map((slide: any) => {
          <div key={slide}>
            <img src={slide.image} alt={slide.imageAlt} />
            <h3 style={contentStyle}>{slide}</h3>
          </div>;
        })}
      </Carousel>
      <LeftOutlined />
    </div>
  );
};
