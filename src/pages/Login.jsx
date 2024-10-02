import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Login = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        {language === 'en' ? 'Login' : 'เข้าสู่ระบบ'}
      </h1>
      {/* Add login form here */}
    </div>
  );
};

export default Login;