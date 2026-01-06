import styled from "styled-components";
import { textColors, bgColors } from "../../theme";

export const WhyWrapper = styled.section`
  padding: 30px 0; 
`;

export const WhyHeader = styled.div`
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
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const WhyCard = styled.div`
  padding: 24px;
  border: 1px solid #eee;
  border-radius: 16px;
  background-color: #fff;

  img {
    width: 40px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${textColors.primary};
  }

  p {
    font-size: 14px;
    color: ${textColors.secondary};
    line-height: 1.4;
  }
`;
