import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Link, useNavigate } from 'react-router';
import { AreaChartOutlined, LogoutOutlined, TeamOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';


const MenuList = () => {
    const navigate = useNavigate();
    const selectedKey = location.pathname === '/' ? '/' : location.pathname;

    const items = [
        {
        key: '/admin/dashboard',
        icon: <AreaChartOutlined />,
        label: <Link to="/">Dashboard</Link>,
        },
        {
        key: '/admin/users',
        icon: <UserOutlined />,
        label: <Link to="/admin/users">Users</Link>,
        },
        {
        key: '/admin/guides',
        icon: <TeamOutlined />,
        label: <Link to="/admin/guides">Users</Link>,
        },
        {
        key: '/logout',
        icon: <LogoutOutlined />,
        label: "Logout",
        onClick: () => {
            localStorage.setItem("is_user", 0)
            navigate('/login'); 
        },
        },
    ];
  
    return (
        <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            items={items} 
        />
            
    );
};

export default MenuList;