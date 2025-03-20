import React from 'react'
import { Layout, Button, Space, Avatar, Dropdown } from 'antd';
import { BellOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Notifications from './Notifications'
const { Header } = Layout;

const CustomHeader = ({ collapsed, toggleSidebar }) => {
  const items = [
    {
      key: '1',
      icon: <UserOutlined/>,
      label: 'Profile',
    },
    {
      key: '2',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      icon: <LogoutOutlined />,
      label: 'Logout',
    },
  ];

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
        <Notifications/>
        <Dropdown menu={{ items }} placement="bottomRight">
          <Space style={{ cursor: 'pointer' }}>
            <Avatar icon={<UserOutlined />} />
            <span>Admin</span>
          </Space>
        </Dropdown>
      </Space>
    </Header>
  ) 
}

export default CustomHeader
