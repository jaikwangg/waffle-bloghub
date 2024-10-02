import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Login = () => {
  const { language } = useLanguage();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempt with:', credentials);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">
        {language === 'en' ? 'Login' : 'เข้าสู่ระบบ'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {language === 'en' ? 'Email' : 'อีเมล'}
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
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
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          {language === 'en' ? 'Login' : 'เข้าสู่ระบบ'}
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        {language === 'en' ? "Don't have an account?" : 'ยังไม่มีบัญชี?'}{' '}
        <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
          {language === 'en' ? 'Register' : 'ลงทะเบียน'}
        </Link>
      </p>
    </div>
  );
};

export default Login;