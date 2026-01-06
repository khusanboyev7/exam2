import styled from "styled-components";
import { textColors, bgColors } from "../../theme";

export const CatalogWrapper = styled.section`
  margin-top: 40px;

  .mobile-catalog {
    display: none;
    width: 100%;
  }

  /* 🔥 Swiper FIX */
  .mobile-catalog .swiper {
    width: 100%;
    overflow: visible;
  }

  .mobile-catalog .swiper-slide {
    height: auto;
  }

  @media (max-width: 330px) {
    margin-top: 24px;

    .mobile-catalog {
      display: block;
    }
  }
`;

export const CatalogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: ${textColors.primary};
  }

  button {
    background: transparent;
    border: 1px solid ${bgColors.primary};
    padding: 10px 18px;
    border-radius: 100px;
    cursor: pointer;
    font-weight: 600;
  }

  @media (max-width: 330px) {
    h2 {
      font-size: 20px;
    }

    button {
      padding: 6px 12px;
      font-size: 12px;
    }
  }
`;

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 20px;

  @media (max-width: 330px) {
    display: none;
  }
`;

export const CatalogCard = styled.div`
  width: 420px;
  height: 250px;
  background-color: #f5f5f5;
  border-radius: 16px;
  padding: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: ${textColors.primary};
  }

  span {
    font-size: 14px;
    color: ${textColors.secondary};
  }

  img {
    max-width: 160px;
    max-height: 200px;
    object-fit: contain;
  }

  /* 📱 Mobile card */
  @media (max-width: 330px) {
    width: 100%;
    min-width: 0;
    height: 150px;
    padding: 12px;

    h3 {
      font-size: 13px;
    }

    span {
      font-size: 11px;
    }

    img {
      max-width: 70px;
      max-height: 100px;
    }
  }
`;
