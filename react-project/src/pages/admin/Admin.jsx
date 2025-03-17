import React, { useState } from 'react'
import { Layout, Space, theme } from "antd";
import Logo from '../../components/sidebar/Logo'
import MenuList from '../../components/sidebar/MenuList'
import ToggleMenu from '../../components/header/ToggleMenu'
import Notifications from '../../components/header/Notifications'
import ProfileDropDown from '../../components/header/ProfileDropDown'
import SearchBar from '../../components/header/SearchBar'



const {Header, Sider, Content} = Layout;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false)

  const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    zIndex: 2,
    // insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  };

  // const {
  //   token : {colorBgContainer, colorBgElevated},
  // } = theme.useToken();

  return (
    <>
      <h1> Hello admin</h1>
    </>
  )
}

export default Admin
