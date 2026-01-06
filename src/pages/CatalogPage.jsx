import React from "react";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
import Catalog from "../components/Catalog/Catalog";

function CatalogPage() {
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "Каталог", path: "/katalog" },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Catalog />
    </>
  );
}

export default CatalogPage;
