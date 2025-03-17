import React, { useState } from 'react';
import { Menu } from 'antd';
import {
    HomeOutlined, CalendarOutlined, TeamOutlined,
    MessageOutlined, PhoneOutlined, FacebookOutlined,
    InstagramOutlined, DatabaseOutlined, UserOutlined
} from '@ant-design/icons';
import { useNavigate} from 'react-router';

const MenuList = ({ darkTheme }) => {
    const navigate = useNavigate()
    const [selectedKeys, setSelectedKeys] = useState(['home'])

    const items = [
        {
            key: '/',
            icon: <HomeOutlined />,
            label: "Home",
        },
        {
            key: '/calendar',
            icon: <CalendarOutlined />,
            label: 'Calendar',
        },
        {
            key: '/support',
            icon: <TeamOutlined />,
            label: 'Support',
            children: [
                {
                    key: '/support/chat',
                    icon: <MessageOutlined />,
                    label: 'Chat',
                },
                {
                    key: '/contact',
                    icon: <PhoneOutlined />,
                    label: 'Contact',
                    children: [
                        {
                            key: '/support/contact/facebook',
                            icon: <FacebookOutlined />,
                            label: 'Facebook',
                        },
                        {
                            key: '/support/contact/instagram',
                            icon: <InstagramOutlined />,
                            label: 'Instagram',
                        },
                    ],
                },
            ],
        },
        {
            key: '/tables',
            icon: <DatabaseOutlined />,
            label: 'Tables',
        },
        {
            key: '/profile',
            icon: <UserOutlined />,
            label: 'Profile',
        },
    ];

    const handleMenuClick = ({key}) => {
        setSelectedKeys([key]);
        navigate(key)
    }

    return (
        <Menu
            theme={darkTheme ? 'dark' : 'light'}
            mode="inline"
            className={`menu-bar ${darkTheme ? 'menu-bar-dark' : ''}`}
            items={items}
            selectedKeys={selectedKeys}
            onClick={handleMenuClick}

        />
    );
};

export default MenuList;