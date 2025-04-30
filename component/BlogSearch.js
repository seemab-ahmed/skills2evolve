"use client"
import { useState } from 'react';

const BlogSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Blog</h2>
        <p className="text-gray-600 text-lg">
          Anticipate emerging trends, adapt with confidence, and unlock new opportunities in a constantly changing world
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex w-full max-w-xl mx-auto">
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Search blogs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search blogs"
          />
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <button 
          type="submit" 
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-r-md transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;