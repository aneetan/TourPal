import React from "react";
import { Button, Card, Avatar, Rate, Tag, Row, Col } from "antd";
import { StarOutlined, GlobalOutlined, TagOutlined, CalendarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Meta } = Card;

const GuideProfile = () => {
  const navigate = useNavigate();

  // Mock data for the guide profile
  const guide = {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.8,
    reviews: 127,
    bio: "Professional tour guide with over 8 years of experience in historical and cultural tours. I specialize in providing immersive experiences that blend education with entertainment. My passion is helping travelers discover the hidden gems and untold stories of each destination.",
    languages: ["English", "Spanish", "French"],
    experience: "8+ years",
    specialty: ["Historical Tours", "Cultural Experiences", "Local Cuisine"]
  };

  const handleBookNow = () => {
    // In a real app, this would navigate to a booking page or open a booking modal
    console.log("Book now clicked");
    // navigate("/booking");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="overflow-hidden bg-white shadow-md">
        {/* Header with background and avatar */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute -bottom-16 left-8">
            <Avatar size={128} src={guide.avatar} alt={guide.name} className="border-4 border-white shadow-lg" />
          </div>
        </div>
        
        <Card className="mt-20">
          <Meta
            title={
              <Row justify="space-between" align="middle">
                <Col>
                  <h1 className="text-3xl font-bold mb-1">{guide.name}</h1>
                  <div className="flex items-center space-x-2 mb-2">
                    <Rate
                      disabled
                      defaultValue={guide.rating}
                      allowHalf
                      character={<StarOutlined />}
                      className="text-yellow-500"
                    />
                    <span className="text-gray-500">({guide.reviews} reviews)</span>
                  </div>
                </Col>
                <Col>
                  <Button 
                    type="primary" 
                    size="large" 
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                </Col>
              </Row>
            }
          />
          
          <div className="space-y-6 pb-6">
            {/* Bio Section */}
            <section>
              <h2 className="text-xl font-semibold mb-2">About</h2>
              <p className="text-gray-700 leading-relaxed">{guide.bio}</p>
            </section>
            
            {/* Languages Section */}
            <section>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <GlobalOutlined className="mr-2 text-blue-500" /> Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {guide.languages.map((language, index) => (
                  <Tag key={index} color="blue">
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
              <p className="text-gray-700">{guide.experience}</p>
            </section>
            
            {/* Specialty Section */}
            <section>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <TagOutlined className="mr-2 text-blue-500" /> Specialties
              </h2>
              <div className="flex flex-wrap gap-2">
                {guide.specialty.map((spec, index) => (
                  <Tag key={index} color="geekblue">
                    {spec}
                  </Tag>
                ))}
              </div>
            </section>
          </div>
          
          <div className="bg-gray-50 border-t flex justify-center p-6">
            <Button 
              type="primary" 
              size="large" 
              onClick={handleBookNow} 
              className="w-full sm:w-auto"
            >
              Book a Tour with {guide.name.split(' ')[0]}
            </Button>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default GuideProfile;