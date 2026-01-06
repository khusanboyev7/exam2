import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import { BrandsWrapper, BrandsHeader, BrandCard } from "./TrustedBrands.styled";

import { brandsData } from "./Data";

function TrustedBrands() {
  return (
    <BrandsWrapper>
      <div className="container">
        <BrandsHeader>
          <h2>Только проверенные бренды</h2>
          <div className="controls">
            <button>←</button>
            <button>→</button>
          </div>
        </BrandsHeader>

        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          grabCursor={true}
          loop={true}
          resistanceRatio={0}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 4,
            },
          }}
        >
          {brandsData.map((brand) => (
            <SwiperSlide key={brand.id}>
              <BrandCard>
                <img src={brand.logo} alt="brand" />
              </BrandCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </BrandsWrapper>
  );
}

export default TrustedBrands;
