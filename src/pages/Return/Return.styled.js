import styled from "styled-components";
import { textColors } from "../../theme";

export const Wrapper = styled.section`
  padding: 30px 0 60px;

  @media (max-width: 340px) {
    padding: 20px 0 40px;
  }
`;

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: 319px 1fr;
  gap: 60px;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 340px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
`;

export const LeftTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  color: ${textColors.primary};

  @media (max-width: 340px) {
    font-size: 24px;
    line-height: 1.2;
  }
`;

export const RightContent = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 24px 0 12px;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 12px;
  }

  ul {
    padding-left: 18px;
    margin-bottom: 20px;
  }

  li {
    font-size: 14px;
    line-height: 1.6;
    color: #2f5acf;
    margin-bottom: 6px;
  }

  @media (max-width: 340px) {
    h3 {
      font-size: 16px;
      margin: 16px 0 8px;
    }

    p {
      font-size: 13px;
      margin-bottom: 8px;
    }

    ul {
      padding-left: 14px;
      margin-bottom: 14px;
    }

    li {
      font-size: 12px;
      line-height: 1.4;
      margin-bottom: 4px;
    }
  }
`;
