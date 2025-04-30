"use client";
import Head from 'next/head';
import Header from '@/component/Header';
import Banner from '@/component/Banner';
import BlogSearch from '@/component/BlogSearch';


export default function Home() {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Implement your search logic here
  };

  return (
    <>
      <Head>
        <title>Skills2Evolve - Learn, Evolve and Secure Your Future</title>
        <meta name="description" content="Discover insights, guides and best practices to enhance your skills and secure your future with Skills2Evolve." />
        <meta name="keywords" content="skills development, professional growth, learning, career evolution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Skills2Evolve - Learn, Evolve and Secure Your Future" />
        <meta property="og:description" content="Discover insights, guides and best practices to enhance your skills and secure your future." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skills2evolve.com" />
        <meta property="og:image" content="https://skills2evolve.com/og-image.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills2Evolve - Learn, Evolve and Secure Your Future" />
        <meta name="twitter:description" content="Discover insights, guides and best practices to enhance your skills and secure your future." />
        <meta name="twitter:image" content="https://skills2evolve.com/twitter-image.jpg" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Banner />
          <BlogSearch onSearch={handleSearch} />
          
          {/* Rest of your content goes here */}
          <div className="container mx-auto py-12 px-4">
            {/* Blog posts would go here */}
          </div>
        </main>
      </div>
    </>
  );
}