import React from "react";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import BlogGridList from "../../components/Blog/Blog";
import { blogData } from "./Data";

const BlogPage = () => {
  return (
    <section className="container">
      <Breadcrumbs
        crumbs={[
          { name: "Главная", path: "/" },
          { name: "Блог", path: "/blog" },
        ]}
      />

      <h1 style={{ fontSize: "48px", margin: "24px 0 40px" }}>Блог</h1>

      <BlogGridList data={blogData} />
    </section>
  );
};

export default BlogPage;
