import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
//data
import blogPosts from "../../data/blog-posts";
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import ResetLocation from "../../helpers/ResetLocation";
import BlogPosts from "./BlogPosts";
import "./blog.css";

const Blog = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentBlogPosts, setcurrentBlogPosts] = useState(
    [...blogPosts].reverse().slice(itemOffset, endOffset)
  );
  const [pageCountPosts, setpageCountPosts] = useState(
    Math.ceil(blogPosts.length / 5)
  );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % blogPosts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };

  useEffect(() => {
    document.title = "Blog | Pizza Time";
    setEndOffset(itemOffset + 5);
    setcurrentBlogPosts([...blogPosts].reverse().slice(itemOffset, endOffset));
    setpageCountPosts(Math.ceil(blogPosts.length / 5));
  }, [setEndOffset, endOffset, itemOffset]);
  return (
    <motion.main
      className="blog"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
      <h2>Blog</h2>
      <p className="blog__intro">
      La pizza lo hace todo mejor. Estos son algunos de nuestros blogs de pizza favoritos, repletos de recetas y consejos para preparar pizzas.
      </p>
      <section className="blog__posts">
        {currentBlogPosts.map((blogPost, index) => {
          return (
            <BlogPosts
              key={index}
              blogPost={blogPost}
            />
          );
        })}
      </section>
      <ReactPaginate
        className="pagination blog__pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountPosts}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
      />
      <ScrollBtn />
    </motion.main>
  );
};
export default Blog;
