import styled from "styled-components";

export const SliderWrapper = styled.section`
  margin: 30px 0;

  .swiper-pagination-bullet {
    background: #999;
    opacity: 1;
    width: 8px;
    height: 8px;
  }

  .swiper-pagination-bullet-active {
    background: #000;
  }

  @media (max-width: 330px) {
    margin: 16px 0;

    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
    }
  }
`;

export const SlideContent = styled.div`
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 40px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 214px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 20px;
  }

  @media (max-width: 330px) {
    border-radius: 16px;
    padding: 16px;
    gap: 12px;
  }
`;

export const ImageBlock = styled.div`
  order: 2;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  padding-right: 214px;

  img {
    max-height: 260px;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    order: 0;
    justify-content: center;
    padding-right: 0;
  }

  @media (max-width: 330px) {
    img {
      max-height: 160px;
    }
  }
`;

export const TextBlock = styled.div`
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 214px;
  text-align: left;

  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  span {
    background-color: #333;
    color: #fff;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    width: fit-content;
  }

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    padding-left: 0;
  }

  @media (max-width: 330px) {
    h2 {
      font-size: 20px;
      margin-bottom: 12px;
    }

    span {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`;
