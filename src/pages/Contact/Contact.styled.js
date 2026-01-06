import styled from "styled-components";
import { textColors } from "../../theme";

export const Wrapper = styled.section`
  padding: 30px 0 80px;

  @media (max-width: 340px) {
    padding: 20px 0 40px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 340px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${textColors.primary};

  @media (max-width: 340px) {
    font-size: 24px;
    line-height: 1.2;
  }
`;

export const RightInfo = styled.div`
  font-size: 14px;
  color: #555;
  line-height: 1.6;

  strong {
    display: block;
    font-size: 18px;
    margin-bottom: 6px;
    color: ${textColors.primary};
  }

  @media (max-width: 340px) {
    font-size: 13px;
    strong {
      font-size: 16px;
    }
  }
`;

export const MapWrapper = styled.div`
  margin-top: 30px;
  border-radius: 16px;
  overflow: hidden;
`;

export const MapImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;

  @media (max-width: 340px) {
    height: 200px;
  }
`;

export const InfoCard = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 16px;
  background: #fff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 340px) {
    padding: 14px;
  }
`;

export const InfoItem = styled.div`
  font-size: 14px;
  color: #555;

  strong {
    display: block;
    font-size: 16px;
    margin-bottom: 4px;
    color: ${textColors.primary};
  }

  @media (max-width: 340px) {
    font-size: 13px;
    strong {
      font-size: 15px;
    }
  }
`;

export const Button = styled.button`
  background: #333;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 10px 22px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 340px) {
    font-size: 13px;
    padding: 8px 20px;
  }
`;
