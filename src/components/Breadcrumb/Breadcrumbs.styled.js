import styled from "styled-components";
import { Link } from "react-router-dom"; 
import { textColors, bgColors } from "../../theme";

export const BreadcrumbWrapper = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${textColors.secondary || "#666"};
  margin-bottom: 20px;
  user-select: none;
`;

export const CrumbLink = styled(Link)`

  color: ${textColors.primary || "#007bff"};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const Separator = styled.span`
  margin: 0 8px;
  color: ${textColors.secondary || "#666"};
`;
