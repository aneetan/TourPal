import React from 'react';
import { Card, Row, Col, Statistic, Typography, List, Avatar } from 'antd';
import { 
  UserOutlined, 
  DollarOutlined, 
  BarChartOutlined,
  TeamOutlined
} from '@ant-design/icons';

const { Paragraph } = Typography;


const CustomGuideData = () => {
  return (
    <>
        <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card style={{backgroundColor:"#FFEBD6", height:"100%"}}>
            <Statistic
              title="Total Revenue (Rs.)"
              value={45231.89}
              precision={2}
              valueStyle={{ fontWeight: 700 }}
            />
            <Paragraph type="secondary">Revenue this month</Paragraph>
            <div style={{ position: 'absolute', top: '35%', right: '16px' }}>
              <DollarOutlined style={{ fontSize: '40px', color: '#FF9248' }} />
            </div>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card style={{backgroundColor:"#FFEBD6", height:"100%"}}>
            <Statistic
              title="Customers"
              value={1205}
              valueStyle={{ fontWeight: 700 }}
            />
            <Paragraph type="secondary">Active users</Paragraph>
            <div style={{ position: 'absolute', top: '35%', right: '16px' }}>
              <UserOutlined style={{ fontSize: '40px', color: '#FF9248' }} />
            </div>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card style={{backgroundColor:"#FFEBD6", height:"100%"}}>
            <Statistic
              title="Guides Registered"
              value={32}
              valueStyle={{ fontWeight: 700 }}
            />
            <Paragraph type="secondary"> Tour Guides </Paragraph>
            <div style={{ position: 'absolute', top: '35%', right: '16px' }}>
              <TeamOutlined style={{ fontSize: '40px', color: '#FF9248' }} />
            </div>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card style={{backgroundColor:"#FFEBD6", height:"100%"}}>
            <Statistic
              title="Destinations Added"
              value={30}
              precision={0}
              valueStyle={{ fontWeight: 700 }}
              suffix={<>+</>}
            />
            <Paragraph type="secondary">Nearby Destinations</Paragraph>
            <div style={{ position: 'absolute', top: '35%', right: '16px' }}>
              <BarChartOutlined style={{ fontSize: '40px', color: '#FF9248' }} />
            </div>
          </Card>
        </Col>
      </Row>
      
    </>
  )
}

export default CustomGuideData
