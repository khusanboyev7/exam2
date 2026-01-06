import React from "react";
import { useNavigate } from "react-router-dom";
import { useShop } from "../../Context/ShopContext";

import {
  PopularWrapper,
  PopularHeader,
  ProductsGrid,
  ProductCard,
  PriceBlock,
} from "./PopularProducts.styled";

import { productsData } from "./Data";
import HeartIcon from "../icons/src/Hearts";
import CartIcon from "../icons/src/Carts";

function PopularProducts() {
  const navigate = useNavigate();
  const { toggleFavorite, addToCart, favorites } = useShop();

  const isFav = (id) => favorites.some((p) => p.id === id);

  const goToDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <PopularWrapper>
      <div className="container">
        <PopularHeader>
          <h2>Популярные товары</h2>
          <button onClick={() => navigate("/katalog")}>Все товары →</button>
        </PopularHeader>

        <ProductsGrid>
          {productsData.map((item) => (
            <ProductCard key={item.id}>
            
              <button
                className={`favorite ${isFav(item.id) ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation(); // Bu juda muhim!
                  toggleFavorite(item);
                }}
                aria-label="Toggle Favorite"
                type="button"
              >
                <HeartIcon
                  width={18}
                  height={18}
                  color={isFav(item.id) ? "#e63946" : "#111"}
                />
              </button>

              {/* 🖼 IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                onClick={(e) => {
                  e.stopPropagation(); // Muhim! Boshlang'ich event tarqalishini to'xtatadi
                  goToDetail(item.id);
                }}
                style={{ cursor: "pointer" }}
              />

              {/* 📝 TITLE */}
              <p className="title">{item.title}</p>

              <PriceBlock>
                <div>
                  <span className="old">{item.oldPrice}</span>
                  <span className="price">{item.price}</span>
                </div>

                {/* 🛒 CART */}
                <button
                  className="cart"
                  onClick={(e) => {
                    e.stopPropagation(); // Muhim! Boshlang'ich event tarqalishini to'xtatadi
                    addToCart(item);
                    navigate("/korzina");
                  }}
                  aria-label="Add to Cart"
                  type="button"
                >
                  <CartIcon width={18} height={18} color="#fff" />
                </button>
              </PriceBlock>
            </ProductCard>
          ))}
        </ProductsGrid>
      </div>
    </PopularWrapper>
  );
}

export default PopularProducts;
