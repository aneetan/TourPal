import { SearchOutlined } from '@ant-design/icons';
import {Input} from 'antd'

const SearchBar = () => {
    const {Search} = Input
    return(
        <>
            <Input
                placeholder="Search "
                allowClear
                suffix={<SearchOutlined />}
                style={{ width: '90%' }}
            />
        </>
    )
}

export default SearchBar;