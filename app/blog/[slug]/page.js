
// app/blog/[slug]/page.js or page.tsx

import BlogdetailComponent from '@/component/Blogdetail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // optional for static generation (SSG)
  return [
    { slug: 'identity-vs-branding' },
    { slug: 'data-breach-case-study' },
  ];
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;

  // Simulate fetching blog data based on slug
  const blogPost = await getBlogData(slug);

  if (!blogPost) {
    notFound(); // 404 fallback
  }

  return <BlogdetailComponent blog={blogPost} />;
}

// Mock function to simulate a blog fetch
async function getBlogData(slug) {
  const allBlogs = {
    'identity-vs-branding': {
      title: "Identity is the New Perimeter: CybeReady's Analysis of IBM's X-Force 2025 Threat Intelligence Index",
      content: 'This is the blog content...',
      author: 'Ron Ashkenas',
      date: 'January 22, 2025',
    },
    'phishing-simulations': {
      title: 'Why Only Phishing Simulations Are Not Enough',
      content: 'This is the breach case study...',
      author: 'Jane Doe',
      date: 'February 12, 2025',
    },
  };

  return allBlogs[slug] || null;
}




// "use client";
// import BlogdetailComponent from '@/component/Blogdetail';

// const Blogdetail = () => {
//   return (
//     <>
//       <BlogdetailComponent />
//     </>
//   );
// };

// export default Blogdetail;
