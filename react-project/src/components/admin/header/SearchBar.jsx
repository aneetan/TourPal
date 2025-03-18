import {Input} from 'antd'

const SearchBar = () => {
    const {Search} = Input
    return(
        <div className='search-btn'>
            <Search
            placeholder='Search here...'
            allowClear 
            size='large'
            onSearch={() => {console.log("Searched")}}
            />
        </div>
    )
}

export default SearchBar;