import styled from "styled-components";
import { textColors } from "../../theme";

export const AboutWrapper = styled.section`
  padding: 30px 0 60px;

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin: 20px 0 40px;
    color: ${textColors.primary};
  }

  @media (max-width: 330px) {
    padding: 20px 0 40px;

    h1 {
      font-size: 22px;
      margin: 16px 0 24px;
    }
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 330px) {
    gap: 24px;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 330px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StatCard = styled.div`
  background: #f6f6f6;
  border-radius: 16px;
  padding: 32px;
  text-align: center;

  strong {
    display: block;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  span {
    color: #777;
    font-size: 15px;
  }

  @media (max-width: 330px) {
    padding: 14px 8px;

    strong {
      font-size: 20px;
      margin-bottom: 4px;
    }

    span {
      font-size: 12px;
      line-height: 1.3;
    }
  }
`;

export const TextBlock = styled.div`
  p {
    font-size: 25px;
    line-height: 1.7;
    margin-bottom: 16px;
    color: #444;
  }

  @media (max-width: 330px) {
    p {
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 14px;
    }
  }
`;
