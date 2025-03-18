import {Input} from 'antd'

const SearchBar = ({darkTheme}) => {
    const {Search} = Input
    return(
        <div className='search-btn'>
            <Search
            placeholder='Search here...'
            allowClear  // ads X button to clear
            //enterButton="Search" -----> Adds a button searched
            size='large'
            style={{background: darkTheme? "#171F2F" : "#FFFFFF"}}
            onSearch={() => {console.log("Searched")}}
            />
        </div>
    )
}

export default SearchBar;