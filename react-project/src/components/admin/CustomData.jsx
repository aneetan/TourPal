import React from 'react'
import { Col, Card, Row, Statistic  } from 'antd';
import { ArrowUpOutlined, StarFilled, TeamOutlined, UserOutlined } from '@ant-design/icons';


const CustomData = () => {
  return (
    <>
        <Row
        gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
        }}
        >
            <Col className="gutter-row" span={6}>
                <Card variant="borderless" style={{backgroundColor:"#FFEBD6", height:"100%"}}>
                    <Statistic
                    title="Active Users"
                    value={112}
                    valueStyle={{
                        fontWeight: 600
                    }}
                    prefix={<TeamOutlined />}
                    />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card variant="borderless" style={{backgroundColor:"#FFEBD6", height:"100%"}}>
                    <Statistic
                    title="Guide Registered"
                    value={23}
                    valueStyle={{
                        fontWeight: 600

                    }}
                    prefix={<UserOutlined />}
                    />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card variant="borderless" style={{backgroundColor:"#FFEBD6", height:"100%"}}>
                    <Statistic
                    title="Ratings"
                    value={224}
                    valueStyle={{
                        fontWeight: 600

                    }}
                    prefix={<StarFilled />}
                    />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
            <Card variant="borderless" style={{backgroundColor:"#FFEBD6", height:"100%"}}>
                    <Statistic
                    title="Increased Reach"
                    value={9.02}
                    precision={2}
                    valueStyle={{
                        fontWeight: 600,
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                    />
                </Card>
            </Col>
        </Row>
      
    </>
  )
}

export default CustomData
