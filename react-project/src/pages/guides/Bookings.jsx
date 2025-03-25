import { Button, Card, Col, Row } from 'antd'
import React, { useState } from 'react'

const Bookings = () => {
    const [activeSection, setActiveSection] = useState('accepted');
    
  return (
    <>
        <Row>
            <Col span={24}>
                <Card variant="borderless">
                <div className="flex space-x-2 mt-6">
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
                        <div> Accepted </div>
                    ) : (
                        <div> Declined </div>
                    )
                }
                </Card>
            </Col>
        </Row>
      
    </>
  )
}

export default Bookings
