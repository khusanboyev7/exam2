import React from "react";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import {
  NavTopWrapper,
  CustomNavLink,
  NavTopSide,
  OrderPhoneButton,
  PhoneLink,
} from "./NavbarTop.styled";

function NavbarTop() {
  const { kompaniya, dostavka, vozvrat, garantiya, kontaktlar, blog } =
    useAppNavigation();

  return (
    <div className="container">
      <NavTopWrapper>
        <NavTopSide>
          <CustomNavLink as="span" onClick={kompaniya}>
            О компании
          </CustomNavLink>
          <CustomNavLink as="span" onClick={dostavka}>
            Доставка и оплата
          </CustomNavLink>
          <CustomNavLink as="span" onClick={vozvrat}>
            Возврат
          </CustomNavLink>
          <CustomNavLink as="span" onClick={garantiya}>
            Гарантии
          </CustomNavLink>
          <CustomNavLink as="span" onClick={kontaktlar}>
            Контакты
          </CustomNavLink>
          <CustomNavLink as="span" onClick={blog}>
            Блог
          </CustomNavLink>
        </NavTopSide>

        <NavTopSide>
          <PhoneLink href="tel:88008904656">8 (800) 890-46-56</PhoneLink>
          <OrderPhoneButton>Заказать звонок</OrderPhoneButton>
        </NavTopSide>
      </NavTopWrapper>
    </div>
  );
}

export default NavbarTop;
