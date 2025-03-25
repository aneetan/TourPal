import { BellOutlined } from "@ant-design/icons";
import { Menu, Avatar, Badge, Dropdown } from "antd";
import { useState } from "react";

const GuideNotifications = () => {

    const [notifications, setNotifications] = useState([
        {id: 1 , text:"You have 1 new message"},
        {id: 2 , text:"You have 2 new message"},
        {id: 3 , text:"You have 3 new message"},
    ])

    const menuItems = notifications.length > 0?
                notifications.map(item => ({
                key: item.id,
                label: item.text
            })) : [
                {
                    key: 'none',
                    label: 'No new notifications'
                }
            ]

    return(
        <div>
            <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight" >
                <Badge count={notifications.length}>
                    <Avatar className="dropdown" icon={<BellOutlined/>} />
                </Badge>
            </Dropdown>

        </div>
    )
}

export default GuideNotifications;