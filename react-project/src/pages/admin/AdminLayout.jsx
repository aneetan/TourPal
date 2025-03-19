import React, { useState } from 'react'
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;
import CustomFooter from '../../components/admin/footer/CustomFooter';
import CustomSidebar from '../../components/admin/sidebar/CustomSidebar';
import CustomHeader from '../../components/admin/header/CustomHeader';
import { Outlet } from 'react-router';

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout style={{minHeight: '100vh', zIndex:100}}>
        <CustomSidebar/>
      <Layout>

        <Header
          style={{
            background: "#fff",
            // marginLeft: 200,
            position:"relative"
          }}
        >
          <CustomHeader/>
        </Header>
         
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              // marginLeft: 200,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <CustomFooter/>
      </Layout>
    </Layout>

    </>
  )
}

export default AdminLayout
