import React from "react";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import HomeSections from "../../components/HomeSections";

import {
  AboutWrapper,
  AboutContent,
  Stats,
  StatCard,
  TextBlock,
} from "./AboutCompany.styled";

function AboutCompany() {
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "О компании", path: "/o-kompanii" },
  ];

  return (
    <>
      <AboutWrapper className="container">
        <Breadcrumbs crumbs={crumbs} />

        <h1>О компании</h1>

        <AboutContent>
          <Stats>
            <StatCard>
              <strong>170+</strong>
              <span>Товаров</span>
            </StatCard>

            <StatCard>
              <strong>1000+</strong>
              <span>Довольных покупателей</span>
            </StatCard>

            <StatCard>
              <strong>170+</strong>
              <span>Товаров</span>
            </StatCard>
          </Stats>

          <TextBlock>
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса.
            </p>

            <p>
              У нас вы найдете разнообразные модели светильников — от
              современных и стильных до классических и элегантных.
            </p>

            <p>
              Мы предлагаем качественные и надежные светильники от лучших
              производителей, которые подарят вам комфорт и уют.
            </p>

            <p>
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России.
            </p>

            <p>
              Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и
              света с NORNLIGHT!
            </p>
          </TextBlock>
        </AboutContent>
      </AboutWrapper>

      <HomeSections />
    </>
  );
}

export default AboutCompany;
