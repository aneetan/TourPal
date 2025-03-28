import React from 'react'
import { Layout, Button, Space, Avatar} from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import AdminNotifications from '../AdminNotifications';
const { Header } = Layout;

const CustomHeader = ({ collapsed, toggleSidebar }) => {

  return (
    <Header style={{ 
      padding: 0, 
      background: '#fff', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      boxShadow: '0 1px 4px rgba(0,21,41,.08)'
    }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleSidebar}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <Space style={{ marginRight: '3rem' }}>
        <AdminNotifications/>
        <Space style={{ cursor: 'pointer' }}>
            <Avatar icon={<UserOutlined />} />
            <span>Admin</span>
          </Space>
      </Space>
    </Header>
  ) 
}

export default CustomHeader
