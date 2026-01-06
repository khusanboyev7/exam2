import React from "react";
import { catalogData } from "./Data";
import {
  CatalogWrapper,
  CatalogHeader,
  CatalogGrid,
  CatalogCard,
} from "./Catalog.styled";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Catalog() {
  return (
    <CatalogWrapper>
      <div className="container">
        <CatalogHeader>
          <h2>Каталог</h2>
          <button>Весь каталог →</button>
        </CatalogHeader>

        {/* Desktop / Tablet */}
        <CatalogGrid>
          {catalogData.map((item) => (
            <CatalogCard key={item.id}>
              <div className="info">
                <h3>{item.title}</h3>
                <span>{item.price} →</span>
              </div>
              <img src={item.image} alt={item.title} />
            </CatalogCard>
          ))}
        </CatalogGrid>

        {/* Mobile ≤330px */}
        <div className="mobile-catalog">
          <Swiper slidesPerView={2} spaceBetween={10} grabCursor={true}>
            {catalogData.map((item) => (
              <SwiperSlide key={item.id}>
                <CatalogCard>
                  <div className="info">
                    <h3>{item.title}</h3>
                    <span>{item.price} →</span>
                  </div>
                  <img src={item.image} alt={item.title} />
                </CatalogCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </CatalogWrapper>
  );
}

export default Catalog;
