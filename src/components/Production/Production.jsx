import React from "react";
import {
  ProductionWrapper,
  ProductionGrid,
  ProductionTitle,
  ProductionText,
} from "./Production.styled";
import { productionText } from "./Data";

function Production() {
  return (
    <ProductionWrapper>
      <div className="container">
        <ProductionGrid>
          <ProductionTitle>
            {productionText.title.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </ProductionTitle>

          <ProductionText>
            {productionText.text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </ProductionText>
        </ProductionGrid>
      </div>
    </ProductionWrapper>
  );
}

export default Production;
