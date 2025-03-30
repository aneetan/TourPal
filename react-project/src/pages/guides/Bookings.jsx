import { Button, Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import BookingsCard from '../../components/cards/BookingsCard';
import { getAllMessages } from '../../utils/user.utils';

const Bookings = () => {
    const [activeSection, setActiveSection] = useState('accepted');
    const [bookingData, setBookingData] = useState([])
    const [declinedData, setDeclinedData] = useState([])
    const [guideId, setGuideId] = useState()

    useEffect(() => {
        const storedGuideId = localStorage.getItem("guideId");
        setGuideId(storedGuideId);
    }, []);
    
    
    useEffect(()=> {
        try {
            getAllMessages().then((response) => {
            setBookingData(
                response.filter(
                    (message) => message.guide === guideId && message.status === "approved"
                )
                )
            })
        } catch (err) {
            console.error('Failed to fetch bookings:', err);
        } 
    } , [bookingData])

    useEffect(()=> {
        try {
            getAllMessages().then((response) => {
            setDeclinedData(
                response.filter(
                    (message) => message.guide === guideId && message.status === "declined"
                )
                )
            })
        } catch (err) {
            console.error('Failed to fetch bookings:', err);
        } 
    } , [declinedData])

    
    
  return (
    <>
        <Row>
            <Col span={24}>
                <Card title="Bookings" variant="borderless">
                <div className="flex space-x-2">
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
                        {bookingData.map((booking, index) => (
                          <BookingsCard key={index} booking={booking} status='accepted' />
                        ))}
                      </div>
                    ) : (
                        <div className="flex flex-wrap gap-4">
                        {declinedData.map((booking, index) => (
                          <BookingsCard key={index} booking={booking} status='declined' />
                        ))}
                      </div>
                    )
                }
                </Card>
            </Col>
        </Row>
      
    </>
  )
}

export default Bookings
