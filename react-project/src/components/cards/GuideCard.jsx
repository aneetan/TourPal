import React from 'react'
import { Button, Popover, Form, Input, Select } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { CalendarOutlined, StarFilled, ZhihuOutlined } from "@ant-design/icons"
import { useNavigate } from 'react-router';

const GuideCard = ({avatar, name, rating, reviews, bio, languages, experience, specialty}) => {
    const stars = Array(5).fill(0);
    const navigate = useNavigate();

    const handleBookUser = () => {
        navigate('/bookGuides')
    }

    // const handleGuideProfile = () => {
    //     navigate('/guideProfile')
    // }

  return (
    <>
        <div 
        className="guide-card relative overflow-hidden rounded-xl bg-white p-10 shadow-sm animate-fadeIn"
        >
        <div className="flex items-start gap-4">
            <div className="relative">
            <img 
                src={avatar} 
                alt={name} 
                className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-sm"
                loading="lazy"
            />
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></span>
            </div>
            
            <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{reviews} reviews</p>
                <div className="flex items-center gap-1 mt-2 sm:mt-0">
                
                {stars.map((_, index) => (
                    <StarFilled
                        key={index}
                        style={{
                            color: index < Math.floor(rating) ? "#fbbf24" : "#d1d5db", 
                            fontSize: "16px", 
                        }}
                    />
                ))}

                <span className="ml-1 text-sm font-medium text-gray-600">{rating}</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600 text-balance line-clamp-2">{bio}</p>
        <div className="flex items-center pt-2 text-sm text-gray-600">
            <span>Speciality In: {specialty}</span>
        </div>
        
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center text-sm text-gray-600">
            <ZhihuOutlined className="h-4 w-4 mr-1 text-gray-500"/>
            <span>{languages.join(' , ')}</span>
            </div>

            <div className="flex items-center text-sm text-gray-600">
            <CalendarOutlined className="h-4 w-4 mr-1 text-gray-500" />
            <span>{experience}</span>
            </div>
            
        </div>
        
        <div className="mt-5 flex gap-2">
            <Button
            style={{background:"#f15d30", color: "#fff"}}
            className="flex-1 background:[#F15D30] transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.98]"
            variant="default"
            onClick={handleBookUser}
            >
            Book Me
            </Button>

            {/* <Button
            style={{color: "#F15D30"}}
            onClick={handleGuideProfile}
            className="transition-all duration-300 hover:opacity-80 hover:border-[#F15D30] hover:scale-[1.01]"
            >
            View Profile
            </Button> */}
        </div>
        </div>
      
    </>
  )
}

export default GuideCard
