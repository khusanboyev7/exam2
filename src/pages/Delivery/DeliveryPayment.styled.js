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
    text-align: left;
  }
`;

export const RightText = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 16px;
    font-weight: 700;
    margin: 20px 0 8px;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #555;
  }

  @media (max-width: 340px) {
    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    h4 {
      font-size: 14px;
      margin: 16px 0 6px;
    }

    p {
      font-size: 13px;
      line-height: 1.5;
    }
  }
`;

export const MapBlock = styled.div`
  margin-top: 60px;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 340px) {
    margin-top: 30px;

    img {
      height: 220px;
    }
  }
`;
