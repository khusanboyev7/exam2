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
    gap: 30px;
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
  max-width: 640px;
  width: 100%;
  margin-left: 24px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${textColors.primary};
  }

  p {
    font-size: 15px;
    line-height: 1.65;
    color: #555;
    margin-bottom: 14px;
  }

  ul {
    padding-left: 18px;
    margin: 16px 0 24px;
  }

  li {
    font-size: 14px;
    line-height: 1.6;
    color: #2f5acf;
    margin-bottom: 8px;
  }

  @media (max-width: 340px) {
    margin-left: 0;

    h3 {
      font-size: 16px;
      margin-bottom: 12px;
    }

    p {
      font-size: 13px;
      margin-bottom: 10px;
    }

    ul {
      padding-left: 14px;
      margin: 12px 0 16px;
    }

    li {
      font-size: 12px;
      margin-bottom: 6px;
      line-height: 1.4;
    }
  }
`;
