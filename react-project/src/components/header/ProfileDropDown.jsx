import { SettingOutlined, LogoutOutlined } from "@ant-design/icons"
import { Avatar, Dropdown } from "antd"
import Profile from '../../assets/images/profile.png'

const links=[
    {
        key:'settings',
        icon: <SettingOutlined />,
        label: "Settings"
    },
    {
        key:'signout',
        icon: <LogoutOutlined />,
        label: "Sign Out"
    }
]

const ProfileDropDown = () => {
    return(
        <div>
            <Dropdown menu={{ items: links }} trigger={['click']} placement="bottomRight" >
                {/* <Badge> */}
                    <Avatar className="dropdown dropdown-profile" src={Profile} />
                {/* </Badge> */}
            </Dropdown>

        </div>
    )

}

export default ProfileDropDown