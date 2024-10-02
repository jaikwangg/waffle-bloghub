import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const fetchBlogs = async () => {
  // This is a mock API call. In a real application, you would fetch from your backend.
  return [
    { id: 1, title: 'First Blog Post', excerpt: 'This is the first blog post.' },
    { id: 2, title: 'Second Blog Post', excerpt: 'This is the second blog post.' },
  ];
};

const Index = () => {
  const { language } = useLanguage();
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">
        {language === 'en' ? 'Latest Blog Posts' : 'บทความล่าสุด'}
      </h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">
              <Link to={`/blog/${blog.id}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                {blog.title}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{blog.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;