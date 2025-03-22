import { CalendarOutlined, GlobalOutlined, TagOutlined } from '@ant-design/icons'
import { Card, Tag } from 'antd'
import React from 'react'

const DetailsCard = ({professionalInfo}) => {
  return (
    <>
        <Card className="mt-20">
          <div className="space-y-6 pb-6">
            {/* Bio Section */}
            <section>
              <h2 className="text-xl font-semibold mb-2">About</h2>
              <p className="text-gray-700 leading-relaxed">{professionalInfo.Bio}</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <TagOutlined className="mr-2 text-blue-500" /> Specialties
              </h2>
              <div className="flex flex-wrap gap-2">
                {professionalInfo.speciality} 
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <GlobalOutlined className="mr-2 text-amber-700" /> Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {professionalInfo.languages.map((language, index) => (
                  <Tag key={index} color="orange" style={{padding:"4px 20px"}}>
                    {language}
                  </Tag>
                ))}
              </div>
            </section>
            
            {/* Experience Section */}
            <section>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <CalendarOutlined className="mr-2 text-blue-500" /> Experience
              </h2>
              <p className="text-gray-700">{professionalInfo.experience} years</p>
            </section>
          </div>
        </Card>
      
    </>
  )
}

export default DetailsCard
