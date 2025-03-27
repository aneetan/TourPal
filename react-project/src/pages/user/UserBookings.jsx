import { Button, Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { getAllMessages } from '../../utils/user.utils';
import BookingsCard from '../../components/cards/BookingsCard';

const UserBookings = () => {
    const [activeSection, setActiveSection] = useState('pending');
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

    const declinedData = [
        {
        img:'https://static.vecteezy.com/system/resources/thumbnails/035/591/149/small_2x/ai-generated-nepali-ethnic-village-girl-generate-ai-photo.jpg',
        destination: 'Egypt',
        date: '2024-02-25',
        message: 'I need a final minute rush for your trip. ',
        user: 'Guide John'
        },
        {
        img:"https://i.pinimg.com/736x/93/4c/56/934c56967384dd345890ccf90e5534ca.jpg",
        destination: 'Mardi Trek',
        date: '2025-12-25',
        message: 'Please provide me the itenary if possible!',
        user: 'Guide Mike'
        },
        {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXaqAPWqkiEqlZ1e0WyGQig_9nOAuSPvvMw&s",
        destination: 'Ilam',
        date: '2025-02-25',
        message: 'Contact me on my details ',
        user: 'Guide Sarah'
        }
    ];

    const acceptedData = [
      {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCQ3hPrSXu-liinfLoDJ0SQsx02a87rbdAb8jpqx_PoPEMk-DAUNT5Q7AfztN3nCjxyM&usqp=CAU',
      destination: 'Sarangkot',
      date: '2025-04-25',
      message: 'Hello! I’m interested in booking a travel package with a local guide. Can you provide more details?',
      user: 'Guide 1'
      },
      {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnNklmHa5DpkGUODLGfaNnZwTIvo95RlkJg&s",
      destination: 'Mardi Trek',
      date: '2025-12-25',
      message: 'Please provide me the itenary if possible!',
      user: 'Guide 2'
      },
      {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiKF_cyqoIDz00ckOBxHq8A7A4f7BWTmHnxYPQZ0UoDp2SZVGixJbh7EQ06B6RnHkA6Q&usqp=CAU",
      destination: 'Ilam',
      date: '2025-02-25',
      message: 'Hi! Can you arrange transportation and a guided tour? Let me know the available options. ',
      user: 'Guide 1'
      }
  ];
    
    
  return (
    <>
        <Row>
            <Col span={24}>
            <Card title="Bookings" variant="borderless">
                <div className="flex space-x-2">
                    <Button
                    style={{
                        border:"none",
                        color: activeSection === 'pending' ? 'orange' : '#000',
                        borderBottom: activeSection === 'pending' ? '2px solid orange' : 'none',
                        borderRadius: 0,
                    }}
                        onClick={() => setActiveSection('pending')}
                    >
                        Pending
                    </Button>
                    <Button
                        style={{
                        border:"none",
                        color: activeSection === 'accepted' ? 'orange' : '#000',
                        borderBottom: activeSection === 'accepted' ? '2px solid orange' : 'none',
                        borderRadius: 0,
                        }}
                        onClick={() => setActiveSection('accepted')}
                    >
                        Accepted
                    </Button>
                    <Button
                    style={{
                        border:"none",
                        color: activeSection === 'declined' ? 'orange' : '#000',
                        borderBottom: activeSection === 'declined' ? '2px solid orange' : 'none',
                        borderRadius: 0,
                    }}
                        onClick={() => setActiveSection('declined')}
                    >
                        Declined
                    </Button>
                    </div>

                    {activeSection === 'accepted'? (
                        <div className="flex flex-wrap gap-4">
                        {acceptedData.map((booking, index) => (
                          <BookingsCard key={index} booking={booking} status='accepted' />
                        ))}
                      </div>
                    ) : (
                      activeSection === 'pending'? (
                        <div className="flex flex-wrap gap-4">
                          {bookingData
                            .filter((booking) => booking.user === localStorage.getItem("username"))
                            .map((booking, index) => (
                              <BookingsCard key={index} booking={booking} status="pending" />
                            ))}
                        </div>
                      ):(
                        <div className="flex flex-wrap gap-4">
                        {declinedData.map((booking, index) => (
                          <BookingsCard key={index} booking={booking} status='declined' />
                        ))}
                      </div>
                      ) 
                    )
                }
                </Card>
            </Col>
        </Row>
      
    </>
  )
}

export default UserBookings
