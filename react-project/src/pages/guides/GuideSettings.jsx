import { Button, Card, Col, Row } from 'antd';
import React, { useState } from 'react'
import PasswordForm from '../../components/PasswordForm';
import { Outlet, useNavigate } from 'react-router';

const GuideSettings = () => {
    const [activeSection, setActiveSection] = useState('password');
    const navigate = useNavigate()
    
  return (
    <>
        <Row>
            <Col span={24}>
                <Card title="Settings" variant="borderless">
                <div className="flex space-x-2">
                    <Button
                    style={{
                        border:"none",
                        color: activeSection === 'password' ? 'orange' : '#000',
                        borderBottom: activeSection === 'password' ? '2px solid orange' : 'none',
                        borderRadius: 0,
                    }}
                        onClick={() => setActiveSection('password')}
                    >
                        Change Password
                    </Button>
                    </div>

                    {activeSection === 'password' &&
                        <div className='flex justify-center items-center mt-4'>
                            <Card className='w-full max-w-2xl shadow-xl'>
                                <Outlet/>
                            </Card>
                        </div>
                      }
                </Card>
            </Col>
        </Row>
      
    </>
  )
}

export default GuideSettings
