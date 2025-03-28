import React from 'react'
import { Layout, Button, Space, Avatar, Dropdown } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Notifications from '../../admin/header/Notifications';
import { Link } from 'react-router';
import GuideNotifications from './GuideNotifications';
const { Header } = Layout;

const GuideHeader = ({ collapsed, toggleSidebar }) => {
  const id = localStorage.getItem('guideId')
  const items = [
    {
      key: `/guide/profile`,
      icon: <UserOutlined/>,
      label: <Link to={`/guide/profile/${id}`}> Profile </Link>,
    },
    {
      key: '/guide/settings/pw',
      icon: <SettingOutlined />,
      label: <Link to='/guide/settings/pw'> Settings </Link>,
    }
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
        <GuideNotifications/>
        <Dropdown menu={{ items }} placement="bottomRight">
          <Space style={{ cursor: 'pointer' }}>
            <Avatar icon={<UserOutlined />} />
            <span> {localStorage.getItem("username")} </span>
          </Space>
        </Dropdown>
      </Space>
    </Header>
  ) 
}

export default GuideHeader
