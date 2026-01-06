import styled from "styled-components";
import { textColors } from "../../theme";

export const BrandsWrapper = styled.section`
  padding: 30px 0;
  overflow: hidden;
`;

export const BrandsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: ${textColors.primary};
  }

  .controls {
    display: flex;
    gap: 10px;
  }

  button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
  }

  @media (max-width: 330px) {
    h2 {
      font-size: 18px;
    }

    button {
      width: 30px;
      height: 30px;
    }
  }
`;

export const BrandCard = styled.div`
  height: 120px;
  border: 1px solid #eee;
  border-radius: 12px;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 140px;
    opacity: 0.6;
  }

  @media (max-width: 330px) {
    height: 100px;

    img {
      max-width: 110px;
    }
  }
`;
