import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { language } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    password: '********',
  });

  const mockBlogPosts = [
    { id: 1, title: 'My First Blog Post', excerpt: 'This is my first blog post on Waffle!' },
    { id: 2, title: 'Exploring React', excerpt: 'React makes building user interfaces a breeze.' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated profile to your backend
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">
        {language === 'en' ? 'User Profile' : 'โปรไฟล์ผู้ใช้'}
      </h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {language === 'en' ? 'Profile Settings' : 'ตั้งค่าโปรไฟล์'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Username' : 'ชื่อผู้ใช้'}
            </label>
            <Input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleInputChange}
              disabled={!isEditing}
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
              value={profile.email}
              onChange={handleInputChange}
              disabled={!isEditing}
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
              value={profile.password}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          {isEditing ? (
            <Button type="submit">
              {language === 'en' ? 'Save Changes' : 'บันทึกการเปลี่ยนแปลง'}
            </Button>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              {language === 'en' ? 'Edit Profile' : 'แก้ไขโปรไฟล์'}
            </Button>
          )}
        </form>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          {language === 'en' ? 'My Blog Posts' : 'บทความของฉัน'}
        </h2>
        <div className="space-y-4">
          {mockBlogPosts.map(post => (
            <Card key={post.id} className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                <Link to={`/blog/${post.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              <div className="mt-2">
                <Link to={`/edit-blog/${post.id}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  {language === 'en' ? 'Edit' : 'แก้ไข'}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;