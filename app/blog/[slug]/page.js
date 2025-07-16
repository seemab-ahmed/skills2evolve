import BlogdetailComponent from '@/component/Blogdetail';
import { notFound } from 'next/navigation';
import Blogimg1 from "../../../Images/blogImg1.png";
import RelatedImage from '../../../Images/related-post.png';
export async function generateStaticParams() {
  return [
    { slug: 'identity-vs-branding' },
    { slug: 'data-breach-case-study' },
    { slug: 'scholarships-in-tech' }, 
    { slug: 'exploit-breaches' }, 
    { slug: 'another-related-post' }
  ];
}
export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  const blogPost = await getBlogData(slug);
  const relatedPosts = await getRelatedPosts(slug);
  if (!blogPost) {
    notFound(); 
  }

  return <BlogdetailComponent blog={blogPost} relatedPosts={relatedPosts} />;
}
async function getBlogData(slug) {
  const allBlogs = {
    'identity-vs-branding': {
      title: "Identity is the New Perimeter: CybeReady's Analysis of IBM's X-Force 2025 Threat Intelligence Index",
      author: "Author Name",
      date: "January 1, 2023",
      image: Blogimg1,
      content: [  // This must be an array
        { type: "paragraph", text: "As we explore opportunities in the tech and cybersecurity fields, it’s important to consider how scholarships can support your education. Scholarships aren’t just a financial aid tool; they are a strategic way to maximize the time value of your investment in education and accelerate your path to a rewarding career." },
        { type: "heading", text: "Why Scholarships Matter" },
        { type: "paragraph", text: 'Education in technology and cybersecurity is an investment of both time and money. Scholarships can alleviate financial burdens, allowing you to focus on developing the skills and knowledge necessary for a successful career. Programs like the <a href="https://www.pge.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">PG&E Better Together STEM Scholarships</a>, offering up to $10,000, directly address the rising cost of education. By reducing the financial strain, scholarships allow you to prioritize your studies and professional development rather than worrying about mounting student debt.' },
        { type: "paragraph", text: "Other programs, such as the Mastercard Vancouver Scholarship, go even further by integrating work experience through internships. These opportunities provide funding and practical, real-world experience, adding to your experience with Skills 2 Evolve and positioning you to enter the workforce with more knowledge and hands-on experience." },
        { type: "heading", text: "Accelerating Workforce Readiness" },
        { type: "paragraph", text: 'Scholarships in technology often go beyond financial support to help build pipelines of skilled professionals in high-demand fields. For example, the <a href="https://www.vectra.ai" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Vectra AI scholarship program</a>, in partnership with Baidam Solutions, focuses on developing talent in AI and cybersecurity while addressing the lack of diversity in these fields.' },
        { type: "paragraph", text: 'Similarly, the <a href="https://www.nsf.gov" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">National Science Foundation\'s $15 million investment</a> in cybersecurity programs at multiple universities creates opportunities for women, BIPOC students, and other underrepresented groups. By combining financial aid with specialized education, these scholarships empower individuals to succeed in critical industries and diversify the workforce.'  },
        { type: "heading", text: "The Time Value of Money" },
        { type: "paragraph", text: "When considering your education, the concept of the time value of money cannot be ignored. Every dollar saved through scholarships is a dollar that doesn’t accrue interest as student debt. This means you can graduate with less financial stress and more freedom to pursue opportunities, even if they aren’t immediately lucrative." },
        { type: "paragraph", text: "SScholarships also save time by integrating educational funding with career readiness. For example, programs like the Mastercard Vancouver Scholarship include paid internships and research initiatives, allowing students to graduate with a competitive edge in the job market. These opportunities reduce the gap between education and employment, accelerating your ability to earn and grow." },
        { type: "heading", text: "Maximizing Scholarship Opportunities" },
        {
          type: "list",
          items: [
            "<strong>Plan Ahead:</strong> Many scholarships, like PG&E's, have early deadlines...",
            "<strong>Research Specific Programs:</strong> Scholarships tailored to specific industries...",
            "<strong>Personalize Your Applications:</strong> Highlight your unique story..."
          ]
        },
        { type: "heading", text: "Conclusion: A Strategic Investment in Your Future" },
        { type: "paragraph", text: "While college may not be the right path for everyone, if it’s part of your journey, scholarships are a critical tool for optimizing your educational investment. By reducing costs, accelerating career readiness, and opening doors to new opportunities, scholarships ensure your education is not only a personal achievement but a smart financial decision" },
        { type: "paragraph", text: "Don’t wait! Begin exploring scholarship opportunities today and take control of your future in technology. The time and effort you invest now will yield dividends for years to come." }
      ]
    },
    'data-breach-case-study': {
      title: "Data Breach Case Study",
      author: "Author Name",
      date: "January 1, 2023",
      image: Blogimg1,
      content: [  // This must be an array
        { type: "paragraph", text: "As we explore opportunities in the tech and cybersecurity fields, it’s important to consider how scholarships can support your education. Scholarships aren’t just a financial aid tool; they are a strategic way to maximize the time value of your investment in education and accelerate your path to a rewarding career." },
        { type: "heading", text: "Why Scholarships Matter" },
        { type: "paragraph", text: 'Education in technology and cybersecurity is an investment of both time and money. Scholarships can alleviate financial burdens, allowing you to focus on developing the skills and knowledge necessary for a successful career. Programs like the <a href="https://www.pge.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">PG&E Better Together STEM Scholarships</a>, offering up to $10,000, directly address the rising cost of education. By reducing the financial strain, scholarships allow you to prioritize your studies and professional development rather than worrying about mounting student debt.' },
        { type: "paragraph", text: "Other programs, such as the Mastercard Vancouver Scholarship, go even further by integrating work experience through internships. These opportunities provide funding and practical, real-world experience, adding to your experience with Skills 2 Evolve and positioning you to enter the workforce with more knowledge and hands-on experience." },
        { type: "heading", text: "Accelerating Workforce Readiness" },
        { type: "paragraph", text: 'Scholarships in technology often go beyond financial support to help build pipelines of skilled professionals in high-demand fields. For example, the <a href="https://www.vectra.ai" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Vectra AI scholarship program</a>, in partnership with Baidam Solutions, focuses on developing talent in AI and cybersecurity while addressing the lack of diversity in these fields.' },
        { type: "paragraph", text: 'Similarly, the <a href="https://www.nsf.gov" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">National Science Foundation\'s $15 million investment</a> in cybersecurity programs at multiple universities creates opportunities for women, BIPOC students, and other underrepresented groups. By combining financial aid with specialized education, these scholarships empower individuals to succeed in critical industries and diversify the workforce.'  },
        { type: "heading", text: "The Time Value of Money" },
        { type: "paragraph", text: "When considering your education, the concept of the time value of money cannot be ignored. Every dollar saved through scholarships is a dollar that doesn’t accrue interest as student debt. This means you can graduate with less financial stress and more freedom to pursue opportunities, even if they aren’t immediately lucrative." },
        { type: "paragraph", text: "SScholarships also save time by integrating educational funding with career readiness. For example, programs like the Mastercard Vancouver Scholarship include paid internships and research initiatives, allowing students to graduate with a competitive edge in the job market. These opportunities reduce the gap between education and employment, accelerating your ability to earn and grow." },
        { type: "heading", text: "Maximizing Scholarship Opportunities" },
        {
          type: "list",
          items: [
            "<strong>Plan Ahead:</strong> Many scholarships, like PG&E's, have early deadlines...",
            "<strong>Research Specific Programs:</strong> Scholarships tailored to specific industries...",
            "<strong>Personalize Your Applications:</strong> Highlight your unique story..."
          ]
        },
        { type: "heading", text: "Conclusion: A Strategic Investment in Your Future" },
        { type: "paragraph", text: "While college may not be the right path for everyone, if it’s part of your journey, scholarships are a critical tool for optimizing your educational investment. By reducing costs, accelerating career readiness, and opening doors to new opportunities, scholarships ensure your education is not only a personal achievement but a smart financial decision" },
        { type: "paragraph", text: "Don’t wait! Begin exploring scholarship opportunities today and take control of your future in technology. The time and effort you invest now will yield dividends for years to come." }
      ]
    },
    'scholarships-in-tech': {
      title: "Scholarships in Technology: Maximizing Your Educational Investment",
      author: "Ron Ashkenas",
      date: "January 22, 2025",
      image: Blogimg1, 
       content: [  // This must be an array
        { type: "paragraph", text: "As we explore opportunities in the tech and cybersecurity fields, it’s important to consider how scholarships can support your education. Scholarships aren’t just a financial aid tool; they are a strategic way to maximize the time value of your investment in education and accelerate your path to a rewarding career." },
        { type: "heading", text: "Why Scholarships Matter" },
        { type: "paragraph", text: 'Education in technology and cybersecurity is an investment of both time and money. Scholarships can alleviate financial burdens, allowing you to focus on developing the skills and knowledge necessary for a successful career. Programs like the <a href="https://www.pge.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">PG&E Better Together STEM Scholarships</a>, offering up to $10,000, directly address the rising cost of education. By reducing the financial strain, scholarships allow you to prioritize your studies and professional development rather than worrying about mounting student debt.' },
        { type: "paragraph", text: "Other programs, such as the Mastercard Vancouver Scholarship, go even further by integrating work experience through internships. These opportunities provide funding and practical, real-world experience, adding to your experience with Skills 2 Evolve and positioning you to enter the workforce with more knowledge and hands-on experience." },
        { type: "heading", text: "Accelerating Workforce Readiness" },
        { type: "paragraph", text: 'Scholarships in technology often go beyond financial support to help build pipelines of skilled professionals in high-demand fields. For example, the <a href="https://www.vectra.ai" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Vectra AI scholarship program</a>, in partnership with Baidam Solutions, focuses on developing talent in AI and cybersecurity while addressing the lack of diversity in these fields.' },
        { type: "paragraph", text: 'Similarly, the <a href="https://www.nsf.gov" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">National Science Foundation\'s $15 million investment</a> in cybersecurity programs at multiple universities creates opportunities for women, BIPOC students, and other underrepresented groups. By combining financial aid with specialized education, these scholarships empower individuals to succeed in critical industries and diversify the workforce.'  },
        { type: "heading", text: "The Time Value of Money" },
        { type: "paragraph", text: "When considering your education, the concept of the time value of money cannot be ignored. Every dollar saved through scholarships is a dollar that doesn’t accrue interest as student debt. This means you can graduate with less financial stress and more freedom to pursue opportunities, even if they aren’t immediately lucrative." },
        { type: "paragraph", text: "SScholarships also save time by integrating educational funding with career readiness. For example, programs like the Mastercard Vancouver Scholarship include paid internships and research initiatives, allowing students to graduate with a competitive edge in the job market. These opportunities reduce the gap between education and employment, accelerating your ability to earn and grow." },
        { type: "heading", text: "Maximizing Scholarship Opportunities" },
        {
          type: "list",
          items: [
            "<strong>Plan Ahead:</strong> Many scholarships, like PG&E's, have early deadlines...",
            "<strong>Research Specific Programs:</strong> Scholarships tailored to specific industries...",
            "<strong>Personalize Your Applications:</strong> Highlight your unique story..."
          ]
        },
        { type: "heading", text: "Conclusion: A Strategic Investment in Your Future" },
        { type: "paragraph", text: "While college may not be the right path for everyone, if it’s part of your journey, scholarships are a critical tool for optimizing your educational investment. By reducing costs, accelerating career readiness, and opening doors to new opportunities, scholarships ensure your education is not only a personal achievement but a smart financial decision" },
        { type: "paragraph", text: "Don’t wait! Begin exploring scholarship opportunities today and take control of your future in technology. The time and effort you invest now will yield dividends for years to come." }
      ]
    },
     'exploit-breaches': {
      title: "Exploit: Breaches and the Data Insights they Offer",
      author: "Ron Ashkenas",
      date: "January 22, 2025",
      image: Blogimg1, 
      content: [  // This must be an array
        { type: "paragraph", text: "As we explore opportunities in the tech and cybersecurity fields, it’s important to consider how scholarships can support your education. Scholarships aren’t just a financial aid tool; they are a strategic way to maximize the time value of your investment in education and accelerate your path to a rewarding career." },
        { type: "heading", text: "Why Scholarships Matter" },
        { type: "paragraph", text: 'Education in technology and cybersecurity is an investment of both time and money. Scholarships can alleviate financial burdens, allowing you to focus on developing the skills and knowledge necessary for a successful career. Programs like the <a href="https://www.pge.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">PG&E Better Together STEM Scholarships</a>, offering up to $10,000, directly address the rising cost of education. By reducing the financial strain, scholarships allow you to prioritize your studies and professional development rather than worrying about mounting student debt.' },
        { type: "paragraph", text: "Other programs, such as the Mastercard Vancouver Scholarship, go even further by integrating work experience through internships. These opportunities provide funding and practical, real-world experience, adding to your experience with Skills 2 Evolve and positioning you to enter the workforce with more knowledge and hands-on experience." },
        { type: "heading", text: "Accelerating Workforce Readiness" },
        { type: "paragraph", text: 'Scholarships in technology often go beyond financial support to help build pipelines of skilled professionals in high-demand fields. For example, the <a href="https://www.vectra.ai" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Vectra AI scholarship program</a>, in partnership with Baidam Solutions, focuses on developing talent in AI and cybersecurity while addressing the lack of diversity in these fields.' },
        { type: "paragraph", text: 'Similarly, the <a href="https://www.nsf.gov" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">National Science Foundation\'s $15 million investment</a> in cybersecurity programs at multiple universities creates opportunities for women, BIPOC students, and other underrepresented groups. By combining financial aid with specialized education, these scholarships empower individuals to succeed in critical industries and diversify the workforce.'  },
        { type: "heading", text: "The Time Value of Money" },
        { type: "paragraph", text: "When considering your education, the concept of the time value of money cannot be ignored. Every dollar saved through scholarships is a dollar that doesn’t accrue interest as student debt. This means you can graduate with less financial stress and more freedom to pursue opportunities, even if they aren’t immediately lucrative." },
        { type: "paragraph", text: "SScholarships also save time by integrating educational funding with career readiness. For example, programs like the Mastercard Vancouver Scholarship include paid internships and research initiatives, allowing students to graduate with a competitive edge in the job market. These opportunities reduce the gap between education and employment, accelerating your ability to earn and grow." },
        { type: "heading", text: "Maximizing Scholarship Opportunities" },
        {
          type: "list",
          items: [
            "<strong>Plan Ahead:</strong> Many scholarships, like PG&E's, have early deadlines...",
            "<strong>Research Specific Programs:</strong> Scholarships tailored to specific industries...",
            "<strong>Personalize Your Applications:</strong> Highlight your unique story..."
          ]
        },
        { type: "heading", text: "Conclusion: A Strategic Investment in Your Future" },
        { type: "paragraph", text: "While college may not be the right path for everyone, if it’s part of your journey, scholarships are a critical tool for optimizing your educational investment. By reducing costs, accelerating career readiness, and opening doors to new opportunities, scholarships ensure your education is not only a personal achievement but a smart financial decision" },
        { type: "paragraph", text: "Don’t wait! Begin exploring scholarship opportunities today and take control of your future in technology. The time and effort you invest now will yield dividends for years to come." }
      ]
    },
     'another-related-post': {
      title: "Another Related Post",
      author: "Ron Ashkenas",
      date: "January 22, 2025",
      image: Blogimg1, 
       content: [  // This must be an array
        { type: "paragraph", text: "As we explore opportunities in the tech and cybersecurity fields, it’s important to consider how scholarships can support your education. Scholarships aren’t just a financial aid tool; they are a strategic way to maximize the time value of your investment in education and accelerate your path to a rewarding career." },
        { type: "heading", text: "Why Scholarships Matter" },
        { type: "paragraph", text: 'Education in technology and cybersecurity is an investment of both time and money. Scholarships can alleviate financial burdens, allowing you to focus on developing the skills and knowledge necessary for a successful career. Programs like the <a href="https://www.pge.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">PG&E Better Together STEM Scholarships</a>, offering up to $10,000, directly address the rising cost of education. By reducing the financial strain, scholarships allow you to prioritize your studies and professional development rather than worrying about mounting student debt.' },
        { type: "paragraph", text: "Other programs, such as the Mastercard Vancouver Scholarship, go even further by integrating work experience through internships. These opportunities provide funding and practical, real-world experience, adding to your experience with Skills 2 Evolve and positioning you to enter the workforce with more knowledge and hands-on experience." },
        { type: "heading", text: "Accelerating Workforce Readiness" },
        { type: "paragraph", text: 'Scholarships in technology often go beyond financial support to help build pipelines of skilled professionals in high-demand fields. For example, the <a href="https://www.vectra.ai" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Vectra AI scholarship program</a>, in partnership with Baidam Solutions, focuses on developing talent in AI and cybersecurity while addressing the lack of diversity in these fields.' },
        { type: "paragraph", text: 'Similarly, the <a href="https://www.nsf.gov" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">National Science Foundation\'s $15 million investment</a> in cybersecurity programs at multiple universities creates opportunities for women, BIPOC students, and other underrepresented groups. By combining financial aid with specialized education, these scholarships empower individuals to succeed in critical industries and diversify the workforce.'  },
        { type: "heading", text: "The Time Value of Money" },
        { type: "paragraph", text: "When considering your education, the concept of the time value of money cannot be ignored. Every dollar saved through scholarships is a dollar that doesn’t accrue interest as student debt. This means you can graduate with less financial stress and more freedom to pursue opportunities, even if they aren’t immediately lucrative." },
        { type: "paragraph", text: "SScholarships also save time by integrating educational funding with career readiness. For example, programs like the Mastercard Vancouver Scholarship include paid internships and research initiatives, allowing students to graduate with a competitive edge in the job market. These opportunities reduce the gap between education and employment, accelerating your ability to earn and grow." },
        { type: "heading", text: "Maximizing Scholarship Opportunities" },
        {
          type: "list",
          items: [
            "<strong>Plan Ahead:</strong> Many scholarships, like PG&E's, have early deadlines...",
            "<strong>Research Specific Programs:</strong> Scholarships tailored to specific industries...",
            "<strong>Personalize Your Applications:</strong> Highlight your unique story..."
          ]
        },
        { type: "heading", text: "Conclusion: A Strategic Investment in Your Future" },
        { type: "paragraph", text: "While college may not be the right path for everyone, if it’s part of your journey, scholarships are a critical tool for optimizing your educational investment. By reducing costs, accelerating career readiness, and opening doors to new opportunities, scholarships ensure your education is not only a personal achievement but a smart financial decision" },
        { type: "paragraph", text: "Don’t wait! Begin exploring scholarship opportunities today and take control of your future in technology. The time and effort you invest now will yield dividends for years to come." }
      ]
    }
    // Add other blogs
  };

  return allBlogs[slug] || null;
}

// 4. Function to fetch related posts
async function getRelatedPosts(slug) {
  const relatedPostsMap = {
    'identity-vs-branding': [
      {
        slug: 'exploit-breaches',
        title: 'Exploit: Breaches and the Data Insights they Offer',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Ron Ashkenas',
        date: 'January 22, 2025'
      },
      {
        slug: 'another-related-post',
        title: 'Another Related Post',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Author Name',
        date: 'January 1, 2025'
      }
    ],
     'data-breach-case-study': [
      {
        slug: 'exploit-breaches',
        title: 'Exploit: Breaches and the Data Insights they Offer',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Ron Ashkenas',
        date: 'January 22, 2025'
      },
      {
        slug: 'another-related-post',
        title: 'Another Related Post',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Author Name',
        date: 'January 1, 2025'
      }
    ],
     'scholarships-in-tech': [
      {
        slug: 'exploit-breaches',
        title: 'Exploit: Breaches and the Data Insights they Offer',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Ron Ashkenas',
        date: 'January 22, 2025'
      },
      {
        slug: 'another-related-post',
        title: 'Another Related Post',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Author Name',
        date: 'January 1, 2025'
      }
    ],
     'exploit-breaches': [
      {
        slug: 'exploit-breaches',
        title: 'Exploit: Breaches and the Data Insights they Offer',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Ron Ashkenas',
        date: 'January 22, 2025'
      },
      {
        slug: 'another-related-post',
        title: 'Another Related Post',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Author Name',
        date: 'January 1, 2025'
      }
    ],
     'another-related-post': [
      {
        slug: 'exploit-breaches',
        title: 'Exploit: Breaches and the Data Insights they Offer',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Ron Ashkenas',
        date: 'January 22, 2025'
      },
      {
        slug: 'another-related-post',
        title: 'Another Related Post',
        excerpt: 'The development of the Internet and the interconnectivity of the world go hand in hand with the advancement of the exploitations of computers. As the…',
        image: RelatedImage,
        author: 'Author Name',
        date: 'January 1, 2025'
      }
    ]
   
  };

  return relatedPostsMap[slug] || [];
}

// // app/blog/[slug]/page.js or page.tsx
// import BlogdetailComponent from '@/component/Blogdetail';
// import { notFound } from 'next/navigation';
// import Blogimg1 from "../../../Images/blogImg1.png";
// export async function generateStaticParams() {
//   // Add all your slugs here
//   return [
//     { slug: 'identity-vs-branding' },
//     { slug: 'data-breach-case-study' },
//     { slug: 'scholarships-in-tech' }, 
//   ];
// }

// export default async function BlogDetailPage({ params }) {
//   const { slug } = params;

//   // Simulate fetching blog data based on slug
//   const blogPost = await getBlogData(slug);

//   if (!blogPost) {
//     notFound(); // 404 fallback
//   }

//   return <BlogdetailComponent blog={blogPost} />;
// }

// // Mock function to simulate a blog fetch
// async function getBlogData(slug) {
//   const allBlogs = {
    // 'identity-vs-branding': {
    //   title: "Identity is the New Perimeter: CybeReady's Analysis of IBM's X-Force 2025 Threat Intelligence Index",
    //   author: "Author Name",
    //   date: "January 1, 2023",
    //   image: Blogimg1,
    //   content: [  // This must be an array
    //     { type: "paragraph", text: "As we explore opportunities in the tech and cybersecurity fields, it’s important to consider how scholarships can support your education. Scholarships aren’t just a financial aid tool; they are a strategic way to maximize the time value of your investment in education and accelerate your path to a rewarding career." },
    //     { type: "heading", text: "Why Scholarships Matter" },
    //     { type: "paragraph", text: "Education in technology and cybersecurity is an investment of both time and money. Scholarships can alleviate financial burdens, allowing you to focus on developing the skills and knowledge necessary for a successful career. Programs like the PG&E Better Together STEM Scholarships, offering up to $10,000, directly address the rising cost of education. By reducing the financial strain, scholarships allow you to prioritize your studies and professional development rather than worrying about mounting student debt." },
    //     { type: "paragraph", text: "Other programs, such as the Mastercard Vancouver Scholarship, go even further by integrating work experience through internships. These opportunities provide funding and practical, real-world experience, adding to your experience with Skills 2 Evolve and positioning you to enter the workforce with more knowledge and hands-on experience." },
    //     { type: "heading", text: "Accelerating Workforce Readiness" },
    //     { type: "paragraph", text: "Scholarships in technology often go beyond financial support to help build pipelines of skilled professionals in high-demand fields. For example, the Vectra AI scholarship program, in partnership with Baidam Solutions, focuses on developing talent in AI and cybersecurity while addressing the lack of diversity in these fields." },
    //     { type: "paragraph", text: "Similarly, the National Science Foundation’s $15 million investment in cybersecurity programs at multiple universities creates opportunities for women, BIPOC students, and other underrepresented groups. By combining financial aid with specialized education, these scholarships empower individuals to succeed in critical industries and diversify the workforce." },
    //     { type: "heading", text: "The Time Value of Money" },
    //     { type: "paragraph", text: "When considering your education, the concept of the time value of money cannot be ignored. Every dollar saved through scholarships is a dollar that doesn’t accrue interest as student debt. This means you can graduate with less financial stress and more freedom to pursue opportunities, even if they aren’t immediately lucrative." },
    //     { type: "paragraph", text: "SScholarships also save time by integrating educational funding with career readiness. For example, programs like the Mastercard Vancouver Scholarship include paid internships and research initiatives, allowing students to graduate with a competitive edge in the job market. These opportunities reduce the gap between education and employment, accelerating your ability to earn and grow." },
    //     { type: "heading", text: "Maximizing Scholarship Opportunities" },
    //     {
    //       type: "list",
    //       items: [
    //         "<strong>Plan Ahead:</strong> Many scholarships, like PG&E's, have early deadlines...",
    //         "<strong>Research Specific Programs:</strong> Scholarships tailored to specific industries...",
    //         "<strong>Personalize Your Applications:</strong> Highlight your unique story..."
    //       ]
    //     },
    //     { type: "heading", text: "Conclusion: A Strategic Investment in Your Future" },
    //     { type: "paragraph", text: "While college may not be the right path for everyone, if it’s part of your journey, scholarships are a critical tool for optimizing your educational investment. By reducing costs, accelerating career readiness, and opening doors to new opportunities, scholarships ensure your education is not only a personal achievement but a smart financial decision" },
    //     { type: "paragraph", text: "Don’t wait! Begin exploring scholarship opportunities today and take control of your future in technology. The time and effort you invest now will yield dividends for years to come." }
    //   ]
    // },
    // 'data-breach-case-study': {
    //   title: "Data Breach Case Study",
    //   author: "Author Name",
    //   date: "January 1, 2023",
    //   image: Blogimg1,
    //  content: [  // This must be an array
    //     { type: "paragraph", text: "As we explore opportunities in the tech and cybersecurity fields, it’s important to consider how scholarships can support your education. Scholarships aren’t just a financial aid tool; they are a strategic way to maximize the time value of your investment in education and accelerate your path to a rewarding career." },
    //     { type: "heading", text: "Why Scholarships Matter" },
    //     { type: "paragraph", text: "Education in technology and cybersecurity is an investment of both time and money. Scholarships can alleviate financial burdens, allowing you to focus on developing the skills and knowledge necessary for a successful career. Programs like the PG&E Better Together STEM Scholarships, offering up to $10,000, directly address the rising cost of education. By reducing the financial strain, scholarships allow you to prioritize your studies and professional development rather than worrying about mounting student debt." },
    //     { type: "paragraph", text: "Other programs, such as the Mastercard Vancouver Scholarship, go even further by integrating work experience through internships. These opportunities provide funding and practical, real-world experience, adding to your experience with Skills 2 Evolve and positioning you to enter the workforce with more knowledge and hands-on experience." },
    //     { type: "heading", text: "Accelerating Workforce Readiness" },
    //     { type: "paragraph", text: "Scholarships in technology often go beyond financial support to help build pipelines of skilled professionals in high-demand fields. For example, the Vectra AI scholarship program, in partnership with Baidam Solutions, focuses on developing talent in AI and cybersecurity while addressing the lack of diversity in these fields." },
    //     { type: "paragraph", text: "Similarly, the National Science Foundation’s $15 million investment in cybersecurity programs at multiple universities creates opportunities for women, BIPOC students, and other underrepresented groups. By combining financial aid with specialized education, these scholarships empower individuals to succeed in critical industries and diversify the workforce." },
    //     { type: "heading", text: "The Time Value of Money" },
    //     { type: "paragraph", text: "When considering your education, the concept of the time value of money cannot be ignored. Every dollar saved through scholarships is a dollar that doesn’t accrue interest as student debt. This means you can graduate with less financial stress and more freedom to pursue opportunities, even if they aren’t immediately lucrative." },
    //     { type: "paragraph", text: "SScholarships also save time by integrating educational funding with career readiness. For example, programs like the Mastercard Vancouver Scholarship include paid internships and research initiatives, allowing students to graduate with a competitive edge in the job market. These opportunities reduce the gap between education and employment, accelerating your ability to earn and grow." },
    //     { type: "heading", text: "Maximizing Scholarship Opportunities" },
    //     {
    //       type: "list",
    //       items: [
    //         "<strong>Plan Ahead:</strong> Many scholarships, like PG&E's, have early deadlines...",
    //         "<strong>Research Specific Programs:</strong> Scholarships tailored to specific industries...",
    //         "<strong>Personalize Your Applications:</strong> Highlight your unique story..."
    //       ]
    //     },
    //     { type: "heading", text: "Conclusion: A Strategic Investment in Your Future" },
    //     { type: "paragraph", text: "While college may not be the right path for everyone, if it’s part of your journey, scholarships are a critical tool for optimizing your educational investment. By reducing costs, accelerating career readiness, and opening doors to new opportunities, scholarships ensure your education is not only a personal achievement but a smart financial decision" },
    //     { type: "paragraph", text: "Don’t wait! Begin exploring scholarship opportunities today and take control of your future in technology. The time and effort you invest now will yield dividends for years to come." }
    //   ]
    // },
    // 'scholarships-in-tech': {
    //   title: "Scholarships in Technology: Maximizing Your Educational Investment",
    //   author: "Ron Ashkenas",
    //   date: "January 22, 2025",
    //   image: Blogimg1, 
    //   content: [  // This must be an array
    //     { type: "paragraph", text: "As we explore opportunities in the tech and cybersecurity fields, it’s important to consider how scholarships can support your education. Scholarships aren’t just a financial aid tool; they are a strategic way to maximize the time value of your investment in education and accelerate your path to a rewarding career." },
    //     { type: "heading", text: "Why Scholarships Matter" },
    //     { type: "paragraph", text: "Education in technology and cybersecurity is an investment of both time and money. Scholarships can alleviate financial burdens, allowing you to focus on developing the skills and knowledge necessary for a successful career. Programs like the PG&E Better Together STEM Scholarships, offering up to $10,000, directly address the rising cost of education. By reducing the financial strain, scholarships allow you to prioritize your studies and professional development rather than worrying about mounting student debt." },
    //     { type: "paragraph", text: "Other programs, such as the Mastercard Vancouver Scholarship, go even further by integrating work experience through internships. These opportunities provide funding and practical, real-world experience, adding to your experience with Skills 2 Evolve and positioning you to enter the workforce with more knowledge and hands-on experience." },
    //     { type: "heading", text: "Accelerating Workforce Readiness" },
    //     { type: "paragraph", text: "Scholarships in technology often go beyond financial support to help build pipelines of skilled professionals in high-demand fields. For example, the Vectra AI scholarship program, in partnership with Baidam Solutions, focuses on developing talent in AI and cybersecurity while addressing the lack of diversity in these fields." },
    //     { type: "paragraph", text: "Similarly, the National Science Foundation’s $15 million investment in cybersecurity programs at multiple universities creates opportunities for women, BIPOC students, and other underrepresented groups. By combining financial aid with specialized education, these scholarships empower individuals to succeed in critical industries and diversify the workforce." },
    //     { type: "heading", text: "The Time Value of Money" },
    //     { type: "paragraph", text: "When considering your education, the concept of the time value of money cannot be ignored. Every dollar saved through scholarships is a dollar that doesn’t accrue interest as student debt. This means you can graduate with less financial stress and more freedom to pursue opportunities, even if they aren’t immediately lucrative." },
    //     { type: "paragraph", text: "SScholarships also save time by integrating educational funding with career readiness. For example, programs like the Mastercard Vancouver Scholarship include paid internships and research initiatives, allowing students to graduate with a competitive edge in the job market. These opportunities reduce the gap between education and employment, accelerating your ability to earn and grow." },
    //     { type: "heading", text: "Maximizing Scholarship Opportunities" },
    //     {
    //       type: "list",
    //       items: [
    //         "<strong>Plan Ahead:</strong> Many scholarships, like PG&E's, have early deadlines...",
    //         "<strong>Research Specific Programs:</strong> Scholarships tailored to specific industries...",
    //         "<strong>Personalize Your Applications:</strong> Highlight your unique story..."
    //       ]
    //     },
    //     { type: "heading", text: "Conclusion: A Strategic Investment in Your Future" },
    //     { type: "paragraph", text: "While college may not be the right path for everyone, if it’s part of your journey, scholarships are a critical tool for optimizing your educational investment. By reducing costs, accelerating career readiness, and opening doors to new opportunities, scholarships ensure your education is not only a personal achievement but a smart financial decision" },
    //     { type: "paragraph", text: "Don’t wait! Begin exploring scholarship opportunities today and take control of your future in technology. The time and effort you invest now will yield dividends for years to come." }
    //   ]
//     }
//   };

//   return allBlogs[slug] || null;
// }




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
