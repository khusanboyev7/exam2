import styled from "styled-components";
import { bgColors, textColors } from "../../../../theme";

export const NavMainWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
  }

  /* 📱 Mobile 330px */
  @media (max-width: 330px) {
    flex-direction: column;
    align-items: stretch;

    .nav-inner {
      flex-direction: column;
      gap: 12px;
    }
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;

  .catalog-button {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 52px;
    padding: 0 28px;
    border-radius: 100px;
    background-color: ${bgColors.primary};
    border: none;
    color: ${textColors.white};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
  }

  .input-wrapper {
    position: relative;
    flex: 1;
    height: 52px;
    border: 1px solid ${bgColors.primary};
    border-radius: 100px;
    overflow: hidden;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 52px 0 20px;
    border: none;
    outline: none;
    font-size: 14px;
  }

  .search-icon-wrap {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  /* 📱 Mobile 330px */
  @media (max-width: 330px) {
    flex-direction: column;
    gap: 10px;

    .catalog-button {
      width: 100%;
      height: 44px;
      font-size: 14px;
      padding: 0 16px;
    }

    .input-wrapper {
      width: 100%;
      height: 44px;
    }

    input {
      font-size: 13px;
    }
  }
`;

export const NavigationItems = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: ${textColors.primary};
    cursor: pointer;
    user-select: none;

    svg {
      width: 22px;
      height: 22px;
    }

    &:hover {
      color: ${bgColors.primary};
    }
  }

  /* 📱 Mobile 330px */
  @media (max-width: 330px) {
    justify-content: space-between;
    gap: 16px;
    padding-top: 8px;

    .item {
      font-size: 11px;
      gap: 4px;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;
