import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { useNavigate } from 'react-router';
import { AreaChartOutlined, LogoutOutlined, TeamOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';


const MenuList = () => {
    const navigate = useNavigate();
    const [selectedKey, setSelectedKey] = useState('1')

    const items = [
        {
        key: '1',
        icon: <AreaChartOutlined />,
        label: 'Dashboard',
        onClick: () => navigate('/admin/dashboard'),
        },
        {
        key: '2',
        icon: <UserOutlined />,
        label: 'Users',
        onClick: () => navigate('/admin/users'),
        },
        {
        key: '3',
        icon: <TeamOutlined />,
        label: 'Guides',
        onClick: () => navigate('/admin/guides'),
        },
        {
        key: '4',
        icon: <LogoutOutlined />,
        label: "Logout",
        onClick: () => {
            localStorage.setItem("is_user", 0)
            navigate('/login'); 
        },
        },
    ];
  
    return (
        <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />
            
    );
};

export default MenuList;