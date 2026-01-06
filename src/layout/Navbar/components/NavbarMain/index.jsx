import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CartIcon,
  CatalogIcon,
  HeartIcon,
  NetworkIcon,
  SearchIcon,
} from "../../../../components";
import {
  NavMainWrapper,
  SearchWrapper,
  NavigationItems,
} from "./NavbarMain.styled";

function NavbarMain() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <NavMainWrapper>
      <div className="container nav-inner">
        <img
          src="/logo.svg"
          alt="Logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />

        <SearchWrapper>
          <button
            className="catalog-button"
            onClick={() => navigate("/katalog")}
          >
            <CatalogIcon />
            <span>Каталог</span>
          </button>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Поиск по товарам"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            <span className="search-icon-wrap" onClick={handleSearch}>
              <SearchIcon />
            </span>
          </div>
        </SearchWrapper>

        <NavigationItems>
          <div className="item" onClick={() => navigate("/favorites")}>
            <HeartIcon />
            <span>Избранное</span>
          </div>

          <div className="item">
            <NetworkIcon />
            <span>Сравнение</span>
          </div>

          <div className="item" onClick={() => navigate("/korzina")}>
            <CartIcon />
            <span>Корзина</span>
          </div>
        </NavigationItems>
      </div>
    </NavMainWrapper>
  );
}

export default NavbarMain;
