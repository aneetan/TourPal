import React from 'react'
import { Layout } from 'antd';
import MenuList from '../sidebar/MenuList';
import Logo from '../../Logo';
const { Sider } = Layout;

const CustomSidebar = ({ collapsed }) => {
  return (
    <>
        <Sider 
          trigger={null} 
          collapsible 
          collapsed={collapsed}
          theme="light"
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo" style={{ 
            height: '32px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            fontSize: collapsed ? '14px' : '18px',
            fontWeight: 'bold',
            margin: '16px 0'
          }}>
            <Logo width="50px"/>
            {collapsed ? '' : 'TourPal'} 
          </div>
          <MenuList/>
        </Sider>
      
    </>
  )
}

export default CustomSidebar
