import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../../components/PopularProducts/Data";

import {
  Wrapper,
  Top,
  ImageBox,
  Right,
  Description,
  PriceBlock,
  Counter,
  Specs,
  SpecsRow,
} from "./Product.styled";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const product = productsData.find((p) => p.id === Number(id));
  if (!product) return <h2>Товар не найден</h2>;

  const { title, image, price, oldPrice, description, specs } = product;

  return (
    <Wrapper className="container">
      <button className="back" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <Top>
        <ImageBox>
          <img src={image} alt={title} />
        </ImageBox>

        <Right>
          <h1>{title}</h1>

          <Description>{description}</Description>

          <PriceBlock>
            <span className="price">{price}</span>
            {oldPrice && <span className="old">{oldPrice}</span>}
          </PriceBlock>

          <Counter>
            <button onClick={() => count > 1 && setCount(count - 1)}>−</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </Counter>

          <button className="cart" onClick={() => navigate("/korzina")}>
            В корзину
          </button>
        </Right>
      </Top>

      <Specs>
        <h2>Характеристики</h2>

        <SpecsRow>
          <span>Мощность</span>
          <span>{specs.power}</span>
        </SpecsRow>
        <SpecsRow>
          <span>Цвет</span>
          <span>{specs.color}</span>
        </SpecsRow>
        <SpecsRow>
          <span>Материал</span>
          <span>{specs.material}</span>
        </SpecsRow>
        <SpecsRow>
          <span>Производитель</span>
          <span>{specs.brand}</span>
        </SpecsRow>
        <SpecsRow>
          <span>Страна</span>
          <span>{specs.country}</span>
        </SpecsRow>
        <SpecsRow>
          <span>Год</span>
          <span>{specs.year}</span>
        </SpecsRow>
        <SpecsRow>
          <span>Размер</span>
          <span>{specs.size}</span>
        </SpecsRow>
      </Specs>
    </Wrapper>
  );
}

export default ProductDetail;
