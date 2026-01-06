import styled from "styled-components";

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

export const BlogCard = styled.article`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eee;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }

  .content {
    padding: 16px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 16px;
    color: #111;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 14px;
    color: #777;
  }

  .arrow {
    font-size: 18px;
    color: #111;
  }
`;
