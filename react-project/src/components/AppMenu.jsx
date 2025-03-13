import { Drawer, Menu, Button, Row, Col } from 'antd';
import React from 'react'
import {MenuOutlined, CloseOutlined} from "@ant-design/icons"

const AppMenu = ({isInline=false}) => {
    const items = [
        {
            key: '1',
            label: 'Home',                                    
        },
        {
            key: '2',
            label: 'Features',
        },
        {
            key: '3',
            label: 'Explore',
        },
        {
            key: '4',
            label: 'Search',
        },
        {
            key: '5',
            label: 'Dance',
        },  
    ];
  return (
    <Menu
        className='menuHeader'
        mode={isInline? "inline":"horizontal"}
        items={items}
    />
  )
}

export default AppMenu
