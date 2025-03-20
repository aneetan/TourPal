import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import CustomData from '../../components/admin/dashboard/CustomData';
import CustomerChart from '../../components/admin/dashboard/CustomerChart';
import RecentActivity from '../../components/admin/dashboard/RecentActivity';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  // Mock data for recent activities
  const activities = [
    { id: 1, user: 'User 1', action: 'completed an order', time: '2 minutes ago' },
    { id: 2, user: 'User 2', action: 'completed an order', time: '5 minutes ago' },
    { id: 3, user: 'User 3', action: 'completed an order', time: '10 minutes ago' },
    { id: 4, user: 'User 4', action: 'completed an order', time: '15 minutes ago' },
  ];

  return (
    <div className="site-card-wrapper">
      <div style={{ marginBottom: 24 }}>
        <Title level={3}>Dashboard</Title>
      </div>

      <CustomData/>
      
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={16}>
          <Card title="Customer Volume" style={{ height: '100%' }}>
            <div style={{ 
              height: '300px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#8c8c8c'
            }}>
              <CustomerChart/>
            </div>
          </Card>
        </Col>
        
        <RecentActivity activities={activities}/>
      </Row>
    </div>
  );
};

export default Dashboard;