import React, { useState } from 'react'
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;
import CustomFooter from '../../components/admin/footer/CustomFooter';
import CustomSidebar from '../../components/admin/sidebar/CustomSidebar';
import CustomHeader from '../../components/admin/header/CustomHeader';
import { Outlet } from 'react-router';
import GuideSidebar from '../../components/guide/sidebar/GuideSidebar';
import GuideHeader from '../../components/guide/header/GuideHeader';

const GuideLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
      <GuideSidebar collapsed={collapsed} />
      <Layout>
        <GuideHeader
          collapsed={collapsed} 
          toggleSidebar={toggleSidebar} 
        />
        <Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
          <Outlet />
        </Content>
      <CustomFooter/>
      </Layout>
    </Layout>

    </>
  )
}

export default GuideLayout
