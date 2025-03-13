import { Drawer, Menu, Button } from 'antd';
import React, { useState } from 'react'
import {MenuOutlined, CloseOutlined} from "@ant-design/icons"

const MenuItems = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div style={{height: "100vh"}}>
            <div style={{width: "100vw", backgroundColor:"#7BBcb0"}}>
                <MenuOutlined className='menuIcon' onClick={() => {setOpenMenu(true)}} />
            </div>
            <span className='headerMenu'>
                <AppMenu/>
            </span>
            <Drawer 
                placement='left'
                open={openMenu}
                onClose={() => {setOpenMenu(false)}}
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
            </Drawer>
        </div>
    )
}

function AppMenu({isInline=false}){
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
            label: 'Explore',
        },
        {
            key: '5',
            label: 'Explore',
        },
    ];

    return( 
        <Menu
            style={{backgroundColor:"#7BBcb0"}}
            className='menuHeader'
            mode={isInline? "inline":"horizontal"}
            items={items}
        />
    )
}

export default MenuItems
