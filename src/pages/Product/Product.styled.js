import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 0;

  .back {
    margin-bottom: 20px;
    background: transparent;
    border: 1px solid #ddd;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
  }

  @media (max-width: 340px) {
    padding: 20px 0;

    .back {
      font-size: 13px;
      padding: 5px 10px;
    }
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 480px 1fr;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (max-width: 340px) {
    gap: 20px;
    margin-bottom: 40px;
  }
`;

export const ImageBox = styled.div`
  border: 1px solid #eee;
  padding: 20px;

  img {
    width: 100%;
    height: 420px;
    object-fit: contain;
  }

  @media (max-width: 340px) {
    padding: 12px;

    img {
      height: 240px;
    }
  }
`;

export const Right = styled.div`
  h1 {
    font-size: 30px;
    margin-bottom: 14px;
  }

  .cart {
    margin-top: 30px;
    width: 220px;
    height: 48px;
    border-radius: 8px;
    background: #2f2f2f;
    color: #fff;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  @media (max-width: 340px) {
    h1 {
      font-size: 20px;
    }

    .cart {
      width: 100%;
      height: 44px;
      font-size: 14px;
      margin-top: 20px;
    }
  }
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 24px;
  max-width: 560px;

  @media (max-width: 340px) {
    font-size: 13px;
    margin-bottom: 16px;
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  .price {
    font-size: 32px;
    font-weight: 700;
  }

  .old {
    text-decoration: line-through;
    color: #999;
  }

  @media (max-width: 340px) {
    gap: 10px;

    .price {
      font-size: 22px;
    }

    .old {
      font-size: 13px;
    }
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background: transparent;
    cursor: pointer;
    font-size: 20px;
  }

  span {
    font-size: 18px;
    min-width: 24px;
    text-align: center;
  }

  @media (max-width: 340px) {
    gap: 12px;

    button {
      width: 34px;
      height: 34px;
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }
`;

export const Specs = styled.div`
  max-width: 900px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 340px) {
    h2 {
      font-size: 18px;
      margin-bottom: 14px;
    }
  }
`;

export const SpecsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 14px 20px;
  border-bottom: 1px solid #eee;
  font-size: 15px;

  &:nth-child(even) {
    background: #fafafa;
  }

  span:last-child {
    color: #555;
  }

  @media (max-width: 340px) {
    padding: 10px 12px;
    font-size: 13px;
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;
