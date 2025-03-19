import React from 'react'
import { Card, Col, List, Avatar } from 'antd';
import { UserOutlined} from '@ant-design/icons';

const RecentActivity = ({activities}) => {
  return (
    <>
        <Col xs={24} lg={8}>
          <Card title="Recent Activity" style={{ height: '100%' }}>
            <List
              itemLayout="horizontal"
              dataSource={activities}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={`${item.user} ${item.action}`}
                    description={item.time}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      
    </>
  )
}

export default RecentActivity
