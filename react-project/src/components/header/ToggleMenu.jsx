import {Button} from 'antd' 
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const ToggleMenu = ({collapsed, setCollapsed, darkTheme}) => {
    return(
        <div>
             <Button type="text"
                onClick={setCollapsed}
                style={{color: darkTheme ? "#FFFFFF" : "#101828"}}
                icon={collapsed? <MenuFoldOutlined />: <MenuUnfoldOutlined />}>
              </Button>
        </div>
    )
}

export default ToggleMenu