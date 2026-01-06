import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  SliderWrapper,
  SlideContent,
  TextBlock,
  ImageBlock,
} from "./HeroSlider.styled";

import lamp from "../../assets/slider/lamp1.png"; 

function HeroSlider() {
  return (
    <SliderWrapper>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
      >
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide key={item}>
            <SlideContent>
              <ImageBlock>
                <img src={lamp} alt="lamp" />
              </ImageBlock>

              <TextBlock>
                <h2>
                  Скидка 15% <br />
                  на все подвесные <br />
                  светильники
                </h2>
                <span>до 5 февраля</span>
              </TextBlock>
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}

export default HeroSlider;
