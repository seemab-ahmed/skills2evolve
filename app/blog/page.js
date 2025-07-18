"use client"
import { useState } from 'react';
import BlogSearch from '@/component/BlogSearch';
import BlogList from '@/component/Bloglist';
import Banner from '@/component/Banner';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    console.log(term);
    setSearchTerm(term);
  };

  return (
    <>
    <Banner />
    <BlogSearch 
     description="Stay updated with expert articles, industry news, and research-driven blog posts tailored for you"
     onSearch={handleSearch} />
    <BlogList searchTerm={searchTerm} />
    </>
  );
};

export default BlogPage;