import React from 'react';
import { Card, Row, Col, Statistic, Typography, List, Avatar } from 'antd';
import { 
  StarFilled,
  LikeOutlined,
  SolutionOutlined,
  GlobalOutlined
} from '@ant-design/icons';

const { Paragraph } = Typography;


const CustomGuideData = () => {
  return (
    <>
        <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card style={{backgroundColor:"#FFEBD6", height:"100%"}}>
            <Statistic
              title="Have been to"
              value={12}
              valueStyle={{ fontWeight: 700 }}
            />
            <Paragraph type="secondary">Destinations</Paragraph>
            <div style={{ position: 'absolute', top: '35%', right: '16px' }}>
              <GlobalOutlined style={{ fontSize: '40px', color: '#FF9248' }} />
            </div>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card style={{backgroundColor:"#FFEBD6", height:"100%"}}>
            <Statistic
              title="User Bookings"
              value={32}
              valueStyle={{ fontWeight: 700 }}
            />
            <Paragraph type="secondary">This Month</Paragraph>
            <div style={{ position: 'absolute', top: '35%', right: '16px' }}>
              <SolutionOutlined style={{ fontSize: '40px', color: '#FF9248' }} />
            </div>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card style={{backgroundColor:"#FFEBD6", height:"100%"}}>
            <Statistic
              title="Reviews"
              value={2}
              valueStyle={{ fontWeight: 700 }}
            />
            <Paragraph type="secondary"> Reviews Collected </Paragraph>
            <div style={{ position: 'absolute', top: '35%', right: '16px' }}>
              <LikeOutlined style={{ fontSize: '40px', color: '#FF9248' }} />
            </div>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card style={{backgroundColor:"#FFEBD6", height:"100%"}}>
            <Statistic
              title="Ratings"
              value={4}
              precision={0}
              valueStyle={{ fontWeight: 700 }}
            />
            <Paragraph type="secondary"> Collected stars </Paragraph>
            <div style={{ position: 'absolute', top: '35%', right: '16px' }}>
              <StarFilled style={{ fontSize: '40px', color: '#FF9248' }} />
            </div>
          </Card>
        </Col>
      </Row>
      
    </>
  )
}

export default CustomGuideData
