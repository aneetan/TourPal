import React from 'react'
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router';
import { AreaChartOutlined, EnvironmentOutlined, FileOutlined, FileProtectOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';


const GuideMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedKey = location.pathname.startsWith('/guide/dashboard') ? '/guide/dashboard' :
                        location.pathname.startsWith('/guide/bookings') ? '/guide/bookings' :
                        location.pathname.startsWith('/guide/') ? '/guide/' :
                        location.pathname;

    const items = [
        {
            key: '/guide/dashboard',
            icon: <AreaChartOutlined />,
            label: <Link to="/guide/dashboard">Dashboard</Link>,
        },
        {
            key: '/guide/bookings',
            icon: <FileProtectOutlined />,
            label: <Link to="/guide/bookings">Bookings</Link>,
        },
        {
            key: '/logout',
            icon: <LogoutOutlined />,
            label: "Logout",
            onClick: () => {
                localStorage.setItem("is_user", 0)
			    localStorage.setItem("isAuthenticated", false)
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

export default GuideMenu;