import React, { useState } from 'react'
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;
import CustomFooter from '../../components/admin/footer/CustomFooter';
import CustomSidebar from '../../components/admin/sidebar/CustomSidebar';
import CustomHeader from '../../components/admin/header/CustomHeader';

const Admin = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout style={{minHeight: '100vh'}}>
        <CustomSidebar/>
      <Layout>

        <Header
          style={{background: "#fff"}}
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
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
        </Content>
        <CustomFooter/>
      </Layout>
    </Layout>

    </>
  )
}

export default Admin
