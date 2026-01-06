import { useShop } from "../../Context/ShopContext";
import {
  ProductsGrid,
  ProductCard,
  PriceBlock,
} from "../../components/PopularProducts/PopularProducts.styled";

const FavoritesPage = () => {
  const { favorites, addToCart, toggleFavorite } = useShop();

  return (
    <section className="container" style={{ padding: "40px 0 70px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 32 }}>
        Избранные товары <sup>{favorites.length}</sup>
      </h1>

      <ProductsGrid>
        {favorites.map((item) => (
          <ProductCard key={item.id}>
            <button className="favorite" onClick={() => toggleFavorite(item)}>
              ❤️
            </button>

            <img src={item.image} alt={item.title} />

            <p className="title">{item.title}</p>

            <PriceBlock>
              <span className="price">{item.price}</span>
              <button className="cart" onClick={() => addToCart(item)}>
                🛒
              </button>
            </PriceBlock>
          </ProductCard>
        ))}
      </ProductsGrid>
    </section>
  );
};

export default FavoritesPage;
