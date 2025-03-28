import { SettingOutlined, LogoutOutlined } from "@ant-design/icons"
import { Avatar, Dropdown } from "antd"

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
            <Dropdown placement="bottomRight" >
                {/* <Badge> */}
                    <Avatar className="dropdown dropdown-profile"
                    src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                {/* </Badge> */}
            </Dropdown>

        </div>
    )

}

export default ProfileDropDown