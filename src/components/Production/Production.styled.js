import styled from "styled-components";
import { textColors } from "../../theme";

export const ProductionWrapper = styled.section`
  padding: 60px 0;
`;

export const ProductionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${textColors.primary};
  line-height: 1.2;

  span {
    display: block;
  }
`;

export const ProductionText = styled.div`
  p {
    font-size: 16px;
    line-height: 1.65;

    color: #2b2b2b;
    font-weight: 500;

    margin-bottom: 20px;
  }
`;

