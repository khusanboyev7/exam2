import React from "react";
import { Link } from "react-router-dom";
import { BlogWrapper, BlogGrid, BlogCard, BlogHeader } from "./Blog.styled";

function Blog({ data = [], limit, showHeader = false }) {
  const visibleData = limit ? data.slice(0, limit) : data;

  return (
    <BlogWrapper>
      <div className="container">
        {showHeader && (
          <BlogHeader>
            <h2>Блог</h2>
            <Link to="/blog">Перейти в блог ↗</Link>
          </BlogHeader>
        )}

        <BlogGrid>
          {visibleData.map((item) => (
            <BlogCard key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="content">
                <h3>{item.title}</h3>

                <div className="bottom">
                  <span>{item.date}</span>
                  <span className="arrow">↗</span>
                </div>
              </div>
            </BlogCard>
          ))}
        </BlogGrid>
      </div>
    </BlogWrapper>
  );
}

export default Blog;
