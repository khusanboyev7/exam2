import React from "react";
import { LayoutWrapper } from "./Layout.styled";
import NavbarTop from "../layout/Navbar/components/NavbarTop";
import NavbarMain from "../layout/Navbar/components/NavbarMain";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <LayoutWrapper>
      <div>
        <NavbarTop />
        <NavbarMain />
        <main>{children}</main>
      </div>
      <Footer />
    </LayoutWrapper>
  );
}

export default MainLayout;
