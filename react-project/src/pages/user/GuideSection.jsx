import React, { useState } from 'react'
import GuideCard from '../../components/cards/GuideCard';
import { Button, Input } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import RequestPop from './SendBookingRequest';

const GuideSection = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const guides = [
        {
          id: '1',
          name: 'Kati Pyari',
          avatar: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
          bio: "I'm a professional tour guide with expertise in historical monuments and cultural experiences. Let me show you the hidden gems of Europe!",
          rating: 4.9,
          reviews: 127,
          languages: ['English', 'French'],
          experience: '7+ years',
          specialty: 'Historical Tours',
        },
        {
          id: '2',
          name: 'Ram Maya Tamang',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
          bio: "Adventure enthusiast specializing in mountain expeditions and hiking trails. Safety certified with emergency training.",
          rating: 4.8,
          reviews: 94,
          languages: ['English', 'German'],
          experience: '5+ years',
          specialty: 'Adventure Tours',
        },
        {
          id: '3',
          name: 'Hari Bahadur',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwdbxJXwe4Fw9ovDa2o53XHw1RdqqioWu9Q&s',
          bio: "Food and wine connoisseur, I'll take you through the finest culinary experiences. From street food to Michelin stars.",
          rating: 4.7,
          reviews: 113,
          languages: ['English', 'Spanish'],
          experience: '8+ years',
          specialty: 'Food Tours',
        },
        {
            id: '1',
            name: 'Kati Pyari',
            avatar: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
            bio: "I'm a professional tour guide with expertise in historical monuments and cultural experiences. Let me show you the hidden gems of Europe!",
            rating: 4.9,
            reviews: 127,
            languages: ['English', 'French'],
            experience: '7+ years',
            specialty: 'Historical Tours',
          },
          {
            id: '2',
            name: 'Ram Maya Tamang',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
            bio: "Adventure enthusiast specializing in mountain expeditions and hiking trails. Safety certified with emergency training.",
            rating: 4.8,
            reviews: 94,
            languages: ['English', 'German'],
            experience: '5+ years',
            specialty: 'Adventure Tours',
          },
          {
            id: '3',
            name: 'Hari Bahadur',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwdbxJXwe4Fw9ovDa2o53XHw1RdqqioWu9Q&s',
            bio: "Food and wine connoisseur, I'll take you through the finest culinary experiences. From street food to Michelin stars.",
            rating: 4.7,
            reviews: 113,
            languages: ['English', 'Spanish'],
            experience: '8+ years',
            specialty: 'Food Tours',
          }
      ];

    return (
        <>
        <div className="w-full max-w-7xl mx-auto px-4 py-10">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold mb-3 tracking-tight">Meet Our Expert Guides</h1>
                <p className="text-sm text-gray-600 max-w-xl mx-auto">
                Discover passionate locals who will enhance your travel experience with their expertise and insider knowledge.
                </p>
            </div>
            
            <div className="mb-8 flex flex-col justify-center sm:flex-row gap-4 items-center">
                <div className="relative w-full max-w-md">
                <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                    type="text"
                    placeholder="Search guides by name, location, or specialty..."
                    className="pl-10 pr-4 py-2 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
            </div>
            
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
            >
                {guides.map((guide) => (
                <motion.div key={guide.id}>
                    <GuideCard {...guide} />
                </motion.div>
                ))}
            </motion.div>
        </div>
        
        </>
    )
}

export default GuideSection
