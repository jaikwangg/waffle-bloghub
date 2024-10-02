import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const EditBlog = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        {language === 'en' ? `Edit Blog Post ${id}` : `แก้ไขบทความ ${id}`}
      </h1>
      {/* Add blog editing form here */}
    </div>
  );
};

export default EditBlog;