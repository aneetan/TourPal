import React, { useState } from 'react'
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router';
import { AreaChartOutlined, EnvironmentOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';


const MenuList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedKey = location.pathname.startsWith('/admin/guides') ? '/admin/guides' :
                        location.pathname.startsWith('/admin/places') ? '/admin/places' :
                        location.pathname;

    const items = [
        {
            key: '/admin/dashboard',
            icon: <AreaChartOutlined />,
            label: <Link to="/admin/dashboard">Dashboard</Link>,
        },
        {
            key: '/admin/users',
            icon: <UserOutlined />,
            label: <Link to="/admin/users">Users</Link>,
        },
        {
            key: '/admin/guides',
            icon: <TeamOutlined />,
            label: <Link to="/admin/guides">Guides</Link>,                                                          
        },
        {
            key: '/admin/places',
            icon: <EnvironmentOutlined/>,
            label: <Link to="/admin/places"> Places </Link>

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