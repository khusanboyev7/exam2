import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import CatalogPage from "./pages/CatalogPage";
import AboutCompany from "./pages/Company/AboutCompany";
import DeliveryPayment from "./pages/Delivery/DeliveryPayment";
import Return from "./pages/Return/Return";
import Guarantee from "./pages/Guarantee/Guarantee";
import Contacts from "./pages/Contact/Contact";
import BlogPage from "./pages/Blog/BlogPage";
import CartPage from "./pages/Cart/CartPage";
import FavoritesPage from "./pages/Favorites/FavoritesPage";
import Search from "./pages/Search/Search";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./pages/Product/ProductDetail"; 
import PopularProducts from "./components/PopularProducts/PopularProducts";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/katalog"
        element={
          <MainLayout>
            <CatalogPage />
          </MainLayout>
        }
      />
      <Route
        path="/o-kompanii"
        element={
          <MainLayout>
            <AboutCompany />
          </MainLayout>
        }
      />
      <Route
        path="/dostavka"
        element={
          <MainLayout>
            <DeliveryPayment />
          </MainLayout>
        }
      />
      <Route
        path="/vozvrat"
        element={
          <MainLayout>
            <Return />
          </MainLayout>
        }
      />
      <Route
        path="/garantii"
        element={
          <MainLayout>
            <Guarantee />
          </MainLayout>
        }
      />
      <Route
        path="/kontakty"
        element={
          <MainLayout>
            <Contacts />
          </MainLayout>
        }
      />
      <Route
        path="/blog"
        element={
          <MainLayout>
            <BlogPage />
          </MainLayout>
        }
      />

      <Route
        path="/favorites"
        element={
          <MainLayout>
            <FavoritesPage />
          </MainLayout>
        }
      />
      <Route
        path="/korzina"
        element={
          <MainLayout>
            <CartPage />
          </MainLayout>
        }
      />

      <Route
        path="/search"
        element={
          <MainLayout>
            <Search />
          </MainLayout>
        }
      />

      <Route
        path="/product/:id"
        element={
          <MainLayout>
        <ProductDetail/>
          </MainLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
