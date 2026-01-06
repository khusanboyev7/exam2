import styled from "styled-components";
import { bgColors, textColors } from "../../theme";

export const FooterWrapper = styled.footer`
  background-color: ${bgColors.lightBlue};
  padding: 50px 0;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h4 {
    font-size: 16px;
    font-weight: 700; 
    color: ${textColors.primary};
    margin-bottom: 8px;
  }

  a {
    font-size: 14px;
    color: #2f2f2f; 
    font-weight: 500; 
    text-decoration: none;

    &:hover {
      color: ${textColors.primary};
    }
  }
`;

export const Phone = styled.a`
  font-size: 16px;
  font-weight: 700; 
  color: ${textColors.primary};
  margin: 12px 0;
`;

export const Payments = styled.img`
  max-width: 200px;
  margin: 12px 0;
`;

export const Socials = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;

  span {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1.2px solid #2f2f2f; 
    color: #2f2f2f; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
`;
