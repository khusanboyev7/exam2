import React from "react";
import { WhyWrapper, WhyHeader, WhyGrid, WhyCard } from "./WhyNorLight.styled";
import { QualityIcon, PriceIcon, DeliveryIcon, AssortmentIcon } from "../icons";


function WhyNorLight() {
  return (
    <WhyWrapper>
      <div className="container">
        <WhyHeader>
          <h2>Почему NORNLIGHT?</h2>
          <button>О компании →</button>
        </WhyHeader>

        <WhyGrid>
          <WhyCard>
            <QualityIcon />
            <h3>Только проверенные бренды</h3>
            <p>Бренды, проверенные временем и качеством</p>
          </WhyCard>

          <WhyCard>
            <PriceIcon />
            <h3>Самые низкие цены</h3>
            <p>Ниже не будет нигде</p>
          </WhyCard>

          <WhyCard>
            <DeliveryIcon />
            <h3>Быстрая доставка</h3>
            <p>Доставляем по всей РФ за 1–10 дней</p>
          </WhyCard>

          <WhyCard>
            <AssortmentIcon />
            <h3>Большой ассортимент</h3>
            <p>Более 1000 товаров</p>
          </WhyCard>
        </WhyGrid>
      </div>
    </WhyWrapper>
  );
}

export default WhyNorLight;
