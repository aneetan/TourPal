import { Button, Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { getAllMessages } from '../../utils/user.utils';
import BookingsCard from '../../components/cards/BookingsCard';

const UserBookings = () => {
    const [activeSection, setActiveSection] = useState('accepted');
    const [bookingData, setBookingData] = useState([])
    
    useEffect(()=> {
        const fetchBookings = async () => {
            try {
                const response = await getAllMessages();
                setBookingData(response);
            } catch (err) {
                console.error('Failed to fetch bookings:', err);
            } 
        };

        fetchBookings();
    }, [])

    const data = [
        {
        img:'https://static.vecteezy.com/system/resources/thumbnails/035/591/149/small_2x/ai-generated-nepali-ethnic-village-girl-generate-ai-photo.jpg',
        destination: 'Egypt',
        date: '2024-02-25',
        message: 'I need a final minute rush for your trip. ',
        user: 'Monalisa'
        },
        {
        img:"https://i.pinimg.com/736x/93/4c/56/934c56967384dd345890ccf90e5534ca.jpg",
        destination: 'Mardi Trek',
        date: '2025-12-25',
        message: 'Please provide me the itenary if possible!',
        user: 'Ram Bahadur'
        },
        {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXaqAPWqkiEqlZ1e0WyGQig_9nOAuSPvvMw&s",
        destination: 'Ilam',
        date: '2025-02-25',
        message: 'Contact me on my details ',
        user: 'Fulmaya'
        }
    ];
    
    
  return (
    <>
        <Row>
            <Col span={24}>
                <Card  title="My Bookings" variant="borderless" className='w-full'>
                        {bookingData.map((booking, index) => (
                          <BookingsCard key={index} booking={booking} status='accepted' />
                        ))}
                        {bookingData.map((booking, index) => (
                          <BookingsCard key={index} booking={booking} status='declined' />
                        ))}
                    <div className="flex flex-wrap gap-4">
                        
                      </div>
                </Card>
            </Col>
        </Row>
      
    </>
  )
}

export default UserBookings
