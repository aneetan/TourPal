import { Button, Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { getAllMessages } from '../../utils/user.utils';
import BookingsCard from '../../components/cards/BookingsCard';

const UserBookings = () => {
    const [activeSection, setActiveSection] = useState('pending');
    const [pendingData, setPendingData] = useState([])
    const [approvedData, setApprovedData] = useState([])
    const [declinedData, setDeclinedData] = useState([])

     const [userId, setUserId] = useState()
    
    useEffect(() => {
        const storedGuideId = localStorage.getItem("userId");
        setUserId(storedGuideId);
    }, []);
    
     useEffect(()=> {
          try {
              getAllMessages().then((response) => {
              setPendingData(
                  response.filter(
                      (message) => message.userId === userId && message.status === "pending"
                  )
                  )
              })
          } catch (err) {
              console.error('Failed to fetch bookings:', err);
          } 
      } , [pendingData])

      useEffect(()=> {
        try {
            getAllMessages().then((response) => {
            setApprovedData(
                response.filter(
                    (message) => message.userId === userId && message.status === "approved"
                )
                )
            })
        } catch (err) {
            console.error('Failed to fetch bookings:', err);
        } 
    } , [approvedData])
    
      useEffect(()=> {
          try {
              getAllMessages().then((response) => {
              setDeclinedData(
                  response.filter(
                      (message) => message.userId === userId && message.status === "declined"
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
                        {approvedData.map((booking, index) => (
                          <BookingsCard key={index} booking={booking} status='approved' guide={booking.guideName} />
                        ))}
                      </div>
                    ) : (
                      activeSection === 'pending'? (
                        <div className="flex flex-wrap gap-4">
                         {pendingData.map((booking, index) => (
                          <BookingsCard key={index} booking={booking} status='pending' guide={booking.guideName} />
                        ))}
                        </div>
                      ):(
                        <div className="flex flex-wrap gap-4">
                        {declinedData.map((booking, index) => (
                          <BookingsCard key={index} booking={booking} status='declined' guide={booking.guideName} />
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
