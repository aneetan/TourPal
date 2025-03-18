import React from 'react'
import SearchBar from './SearchBar'
import Notifications from './Notifications'
import ProfileDropDown from './ProfileDropDown'

const CustomHeader = () => {
  return (
    <div className='flex justify-between items-center' >
        <div className="left-header mr-4 mt-3">
            <SearchBar/>
        </div>
        <div className=" flex right-header items-center space-x-4">
            <Notifications/>
            <ProfileDropDown/>
        </div>
      
    </div>  
  )
}

export default CustomHeader
