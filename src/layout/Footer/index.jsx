import React from "react";
import {
  FooterWrapper,
  FooterGrid,
  FooterCol,
  Phone,
  Payments,
  Socials,
} from "./Footer.styled";

import PaymentLogos from "../../assets/catalog/payments.png";

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterGrid>

          <FooterCol>
            <img src="/logo-foot.svg" alt="Logo Footer" />

            <Phone href="tel:88008904656">8 (800) 890-46-56</Phone>

            <Payments src={PaymentLogos} alt="Payments" />

            <a href="/">Политика конфиденциальности</a>
            <a href="/">Пользовательское соглашение</a>

            <Socials>
              <span>VK</span>
              <span>VK</span>
              <span>VK</span>
            </Socials>
          </FooterCol>

          <FooterCol>
            <h4>Покупателям</h4>
            <a href="/">О компании</a>
            <a href="/">Доставка и оплата</a>
            <a href="/">Возврат</a>
            <a href="/">Гарантии</a>
            <a href="/">Контакты</a>
            <a href="/">Блог</a>
          </FooterCol>

          <FooterCol>
            <h4>Товары</h4>
            <a href="/">Люстры</a>
            <a href="/">Светильники</a>
            <a href="/">Бра</a>
            <a href="/">Торшеры</a>
            <a href="/">Комплектующие</a>
            <a href="/">Настольные лампы</a>
          </FooterCol>

          <FooterCol>
            <h4>&nbsp;</h4>
            <a href="/">Споты</a>
            <a href="/">Трековые светильники</a>
            <a href="/">Уличные светильники</a>
            <a href="/">Технические светильники</a>
            <a href="/">Светодиодные ленты</a>
          </FooterCol>
        </FooterGrid>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
