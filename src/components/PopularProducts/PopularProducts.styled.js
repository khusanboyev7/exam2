import styled from "styled-components";
import { textColors, bgColors } from "../../theme";

export const PopularWrapper = styled.section`
  padding: 30px 0;

  @media (max-width: 330px) {
    padding: 20px 0;
  }
`;

export const PopularHeader = styled.div`
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
    font-weight: 600;
    cursor: pointer;
  }

  @media (max-width: 330px) {
    h2 {
      font-size: 18px;
    }

    button {
      padding: 6px 12px;
      font-size: 12px;
    }
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  @media (max-width: 330px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;


export const ProductCard = styled.div`
  position: relative;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 16px;
  background-color: #fff;

  img {
    width: 100%;
    height: 220px;
    object-fit: contain;
    margin-bottom: 16px;
  }

  .title {
    font-size: 14px;
    margin-bottom: 12px;
    color: ${textColors.primary};
  }

  .favorite {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 330px) {
    padding: 12px;
    border-radius: 12px;

    img {
      height: 160px;
      margin-bottom: 10px;
    }

    .title {
      font-size: 12px;
      margin-bottom: 8px;
    }

    .favorite {
      top: 10px;
      right: 10px;
    }
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .old {
    display: block;
    font-size: 12px;
    text-decoration: line-through;
    color: ${textColors.secondary};
  }

  .price {
    font-size: 16px;
    font-weight: 700;
    color: ${textColors.primary};
  }

  .cart {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: ${bgColors.primary};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 330px) {
    .old {
      font-size: 10px;
    }

    .price {
      font-size: 14px;
    }

    .cart {
      width: 32px;
      height: 32px;
    }
  }
`;
