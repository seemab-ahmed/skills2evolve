"use client"
import { useState } from 'react';
import BlogSearch from '@/component/BlogSearch';
import BlogList from '@/component/Bloglist';
import Banner from '@/component/Banner';
import Future from '@/component/build-future';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    console.log(term);
    setSearchTerm(term);
  };

  return (
    <>
    <Banner />
    <BlogSearch onSearch={handleSearch} />
    <BlogList searchTerm={searchTerm} />
    <Future />
    </>
  );
};

export default BlogPage;