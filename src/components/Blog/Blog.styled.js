import styled from "styled-components";
import { textColors, bgColors } from "../../theme";

export const BlogWrapper = styled.section`
  padding: 40px 0 70px; 
`;

export const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: ${textColors.primary};
  }

  a {
    background: transparent;
    border: 1px solid ${bgColors.primary};
    padding: 10px 18px;
    border-radius: 100px;
    font-weight: 600;
    color: ${textColors.primary};
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      background: ${bgColors.primary};
      color: #fff;
    }
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #eee;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .content {
    padding: 16px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: ${textColors.primary};
    line-height: 1.3;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 14px;
    color: ${textColors.secondary};
  }

  .arrow {
    font-size: 18px;
  }
`;
