import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Avatar, Rate, Tag} from "antd";
import { GlobalOutlined, TagOutlined, CalendarOutlined, StarFilled, PhoneOutlined, MailOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { Anchor } from 'antd';
import DetailsCard from "../../components/user/DetailsCard";
import ReviewCard from "../../components/user/ReviewCard";
import CustomModal from "../../components/CustomModal";
import { getAllReviews } from "../../utils/user.utils";

const { Meta } = Card;

const GuideProfile = () => {
  const currentPath = window.location.pathname
  const navigate = useNavigate();
  let params = useParams();
  const isAdmin = currentPath.includes('admin/guideProfile')
  const isGuide = currentPath.includes('guide/profile')
  const guide = localStorage.getItem("guideId");
  const [activeSection, setActiveSection] = useState('details');

  const {data, loading, error} = useFetch(`http://localhost:3000/guides/${params.id}`) 
  const [reviews, setReviews] = useState()

  useEffect(()=> {
    getAllReviews().then((response )=> {
      const filtered = response.filter(review => review.guide === params.id);
      setReviews(filtered)

    })
  }, [reviews])
  
  if (!data) return <p>No guide found.</p>;

  const {personalDetails, professionalInfo} = data || []

  const handleBookNow = () => {
    navigate(`/bookGuides/${params.id}`)
  };

  const handleReview =() => {
    navigate(`/addReview/${params.id}`)
  }

  const handleEditGuide= () => {
    navigate(`/guide/edit/${params.id}`)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="overflow-hidden bg-white shadow-md">
        <div className="container md:flex-row w-full flex flex-col items-center justify-between mb-4">
          <div className="w-full md:w-[20%] mb-3 flex justify-center md:justify-start">
            <Avatar size={128}
            src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
            alt={personalDetails.name} className="border-4 border-white shadow-lg"
            />
          </div>
          <div className=" w-full md:w-[80%] md:pl-6">
            <h1 className="text-2xl mb-3 font-bold">{personalDetails?.name}</h1>
            <div className="items-center mb-3">
              <Rate
                disabled
                defaultValue={4}
                allowHalf
                character={<StarFilled />}
                className="text-yellow-500"
              />
              <span className="text-gray-500">(4 reviews)</span>
            </div>
            <h3 className="text-base mb-3 font-medium"> <PhoneOutlined/> {personalDetails?.phone}</h3>
            <h3 className="text-base mb-3 font-medium"> <MailOutlined/> {personalDetails?.email} </h3>
            <h3 className="text-sm mb-3 font-normal">Rs. {professionalInfo?.pricing} / hour</h3>
            {isAdmin && (
              <a href="https://www.alexholidays.com/tours/images/credentials/Tourist-Guide-Alex--2016-2018.jpg"
              className="underline" target="_blank"> View Document</a>
            )}
            <br/>
            
            {isAdmin? null: (
              (isGuide? (
                <Button 
                type="primary" 
                size="large" 
                onClick={handleEditGuide}
                >
                  Edit
                </Button>
              ): (
                <Button 
                type="primary" 
                size="large" 
                onClick={handleBookNow}
                >
                  Book Now
                </Button>
              )
            )
          )
          }
               
          </div>
        </div>

        {/* --------- Anchor ---------- */}
        <div className="flex space-x-2 mt-6">
          <Button
            style={{
              border:"none",
              color: activeSection === 'details' ? 'orange' : '#000',
              borderBottom: activeSection === 'details' ? '2px solid orange' : 'none',
              borderRadius: 0,
             }}
            onClick={() => setActiveSection('details')}
          >
            Details
          </Button>
          <Button
           style={{
            border:"none",
            color: activeSection === 'reviews' ? 'orange' : '#000',
            borderBottom: activeSection === 'reviews' ? '2px solid orange' : 'none',
            borderRadius: 0,
           }}
            onClick={() => setActiveSection('reviews')}
          >
            Reviews
          </Button>
        </div>
        {/* --------- Anchor ends ---------- */}


        {activeSection === 'details'? (
          <DetailsCard id="reviews" professionalInfo={professionalInfo}/>
        ):
        (
          <div className="container w-[100%]">
              {!isAdmin && !isGuide? (
            <div className="pb-10 pt-2 w-[50%] md:w-[100%]">
              <Button style={{float:"right"}} onClick={handleReview}
               type="primary"><PlusOutlined/> Add Review</Button>
            </div>
              ):''}

            {reviews.map((r)=>(
              <div className="mb-2" key={r.id}>
                <ReviewCard reviews={r} isAdmin={isAdmin}/>
              </div>
            ))}
          </div>
      )}
  </Card>

    </div>
  );
};

export default GuideProfile;