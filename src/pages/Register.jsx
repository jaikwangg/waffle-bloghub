import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Register = () => {
  const { language } = useLanguage();
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the registration logic
    console.log('Registration attempt with:', userData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">
        {language === 'en' ? 'Register' : 'ลงทะเบียน'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {language === 'en' ? 'Username' : 'ชื่อผู้ใช้'}
          </label>
          <Input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {language === 'en' ? 'Email' : 'อีเมล'}
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {language === 'en' ? 'Password' : 'รหัสผ่าน'}
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          {language === 'en' ? 'Register' : 'ลงทะเบียน'}
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        {language === 'en' ? 'Already have an account?' : 'มีบัญชีอยู่แล้ว?'}{' '}
        <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
          {language === 'en' ? 'Login' : 'เข้าสู่ระบบ'}
        </Link>
      </p>
    </div>
  );
};

export default Register;