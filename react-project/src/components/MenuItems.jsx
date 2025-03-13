import { Drawer, Menu, Button, Row, Col } from 'antd';
import React, { useState } from 'react'
import {MenuOutlined, CloseOutlined} from "@ant-design/icons"
import AppMenu from './AppMenu';
import Logo from '../assets/images/tourguidelogo.png'

const MenuItems = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div style={{height: "100vh"}}>
            <div className='navbar-responsive' style={{width: "100vw", backgroundColor:"#7BBcb0"}}>
                <MenuOutlined className='menuIcon' onClick={() => {setOpenMenu(true)}} />
                <div className="nav-Logo">
                    <img src={Logo} alt='logo'/>
                </div>
                    <Button className='login-btn btn'> Login </Button>

            </div>

            <span className='headerMenu'>
                <div className="nav-Logo">
                    <img src={Logo} alt='logo'/>
                </div>
                <div className="menu-items">
                    <AppMenu isInline={false}/>
                </div>
                <div className="btn-section">
                    <Button className='login-btn btn'> Login </Button>
                </div>
            </span>

            <Drawer 
                placement='left'
                open={openMenu}
                // onClose={() => {setOpenMenu(false)}}
                closable={false}
             >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        type="text"
                        icon={<CloseOutlined />}
                        onClick={() => setOpenMenu(false)}
                    />
                </div>

                <AppMenu isInline />
                <Button type="primary"> Get Started</Button>
            </Drawer>
        </div>
    )
}

export default MenuItems
