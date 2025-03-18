import React from 'react'
import { Layout } from 'antd';
import MenuList from '../sidebar/MenuList';
const { Header, Content, Sider } = Layout;

const CustomSidebar = () => {
  return (
    <>
        <Sider
          theme="light"
          style={{position: "fixed", overflowY:"scroll", height:"100vh" }}
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className=" justify-center mx-16 my-8 demo-logo-horizontal">
            Logo
          </div>
          <MenuList/>
        </Sider>
      
    </>
  )
}

export default CustomSidebar
