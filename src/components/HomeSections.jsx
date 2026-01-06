import React from "react";
import TrustedBrands from "./TrustedBrands/TrustedBrands";
import Blog from "./Blog/Blog";
import { blogData } from "./Blog/Data";

function HomeSections() {
  return (
    <>
      <TrustedBrands />
      <Blog data={blogData.slice(0, 3)} />
    </>
  );
}

export default HomeSections;
