import React, { useEffect, useState } from 'react'
import GuideCard from '../../components/cards/GuideCard';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getAllGuides } from '../../utils/user.utils';

const GuideSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([])

    useEffect(()=> {
        getAllGuides().then ((response) => {
              setData(
                response.filter(
                  (guide) => guide.status === "approved"
                )
              )
            })
    }, [data])

    const guideData = (data || []).map((guide)=> ({
      id: guide.id,
      name: guide.personalDetails.name, 
      email: guide.personalDetails.email,
      phone: guide.personalDetails.phone,
      bio:guide.professionalInfo.Bio,
      experience: guide.professionalInfo.experience,
      languages: guide.professionalInfo.languages,
      speciality: guide.professionalInfo.speciality,
      pricing: guide.professionalInfo.pricing
  }))
  
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
            
            <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
            >
                {guideData.map((guide) => (
                <div key={guide.id}>
                    <GuideCard {...guide} />
                </div>
                ))}
                
            </div>
        </div>
        
        </>
    )
}

export default GuideSection
