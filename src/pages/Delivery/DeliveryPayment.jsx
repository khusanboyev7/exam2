import React from "react";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import mapImage from "../../assets/map/map.png";

import {
  Wrapper,
  TopContent,
  LeftTitle,
  RightText,
  MapBlock,
} from "./DeliveryPayment.styled";

function DeliveryPayment() {
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "Доставка и оплата", path: "/dostavka" },
  ];

  return (
    <Wrapper className="container">
      <Breadcrumbs crumbs={crumbs} />

      {/* TOP CONTENT */}
      <TopContent>
        <LeftTitle>
          Доставка
          <br />и оплата
        </LeftTitle>

        <RightText>
          <h3>Доставка</h3>
          <p>
            Мы осуществляем доставку со склада по Москве и Московской области
            собственной курьерской службой. Транспортными компаниями нашу
            продукцию мы доставляем по всей территории РФ, а также по всем
            странам СНГ.
            <br />
            <strong>Сроки доставки: 4—6 недель</strong>
          </p>

          <h4>Курьерская доставка</h4>
          <p>
            <strong>БЕСПЛАТНО</strong> доставим в пределах МКАД любой заказ от 5
            000 ₽.
            <br />
            Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км
            от МКАД
          </p>

          <h4>Самовывоз</h4>
          <p>
            Любой заказ можно забрать самостоятельно по адресу:
            <br />
            г. Москва, Дмитровское шоссе д.100с2
          </p>
        </RightText>
      </TopContent>

      <MapBlock>
        <img src={mapImage} alt="Карта доставки" />
      </MapBlock>
    </Wrapper>
  );
}

export default DeliveryPayment;
