import React from "react";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import mapImage from "../../assets/map/map.png";

import {
  Wrapper,
  TopRow,
  Title,
  RightInfo,
  MapWrapper,
  MapImage,
  InfoCard,
  InfoItem,
  Button,
} from "./Contact.styled";

function Contacts() {
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <Wrapper className="container">
      <Breadcrumbs crumbs={crumbs} />

      <TopRow>
        <Title>Контакты</Title>

        <RightInfo>
          <strong>8 (800) 890-46-56</strong>
          Пн–Пт: 10:00 до 19:00
          <br />
          Сб–Вс: заказ через корзину
          <br />
          Телефоны:
        </RightInfo>
      </TopRow>

      <MapWrapper>
        <MapImage src={mapImage} alt="Карта" />

        <InfoCard>
          <InfoItem>
            <strong>Адрес магазина</strong>
            г. Москва, Дмитровское шоссе д.100с2
          </InfoItem>

          <InfoItem>
            <strong>Почта</strong>
            NORNLight@mail.ru
          </InfoItem>

          <InfoItem>
            <strong>Телефон</strong>8 (800) 890-46-56
          </InfoItem>

          <Button>Оставить заявку</Button>
        </InfoCard>
      </MapWrapper>
    </Wrapper>
  );
}

export default Contacts;
