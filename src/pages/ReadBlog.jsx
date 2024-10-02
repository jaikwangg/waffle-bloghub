import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '../contexts/LanguageContext';

const fetchBlog = async (id) => {
  // This is a mock API call. In a real application, you would fetch from your backend.
  return {
    id,
    title: `Blog Post ${id}`,
    content: 'This is the full content of the blog post.',
    author: 'John Doe',
    date: '2023-05-01',
  };
};

const ReadBlog = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const { data: blog, isLoading, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlog(id),
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="text-gray-600 dark:text-gray-400 mb-4">
        {language === 'en' ? 'By' : 'โดย'} {blog.author} | {blog.date}
      </div>
      <div className="prose dark:prose-invert max-w-none">
        {blog.content}
      </div>
    </div>
  );
};

export default ReadBlog;