import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Profile = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        {language === 'en' ? 'User Profile' : 'โปรไฟล์ผู้ใช้'}
      </h1>
      {/* Add profile information and edit form here */}
    </div>
  );
};

export default Profile;