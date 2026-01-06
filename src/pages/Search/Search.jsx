import React from "react";
import { useLocation } from "react-router-dom";
import { productsData } from "../../components/PopularProducts/Data";
import {
  ProductsGrid,
  ProductCard,
  PriceBlock,
} from "../../components/PopularProducts/PopularProducts.styled";

import HeartIcon from "../../components/icons/src/Heart.icon";
import CartIcon from "../../components/icons/src/Cart.icon";

function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  const filteredProducts = productsData.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  return (
    <section style={{ padding: "40px 0" }}>
      <div className="container">
        <h2 style={{ marginBottom: "24px" }}>
          Qidiruv natijalari: <b>{query}</b>
        </h2>

        {filteredProducts.length === 0 ? (
          <p>Hech qanday mahsulot topilmadi 😕</p>
        ) : (
          <ProductsGrid>
            {filteredProducts.map((item) => (
              <ProductCard key={item.id}>
                <img src={item.image} alt={item.title} />

                <p className="title">{item.title}</p>

                {/* Xarakteristika */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "#777",
                    marginBottom: "10px",
                  }}
                >
                  Quvvati: 12W <br />
                  Rang: Oq <br />
                  Material: Metall
                </p>

                <PriceBlock>
                  <div>
                    <span className="old">{item.oldPrice}</span>
                    <span className="price">{item.price}</span>
                  </div>

                  <button className="cart">
                    <CartIcon width={18} height={18} color="#fff" />
                  </button>
                </PriceBlock>
              </ProductCard>
            ))}
          </ProductsGrid>
        )}
      </div>
    </section>
  );
}

export default Search;
