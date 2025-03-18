import React from 'react'
import CustomData from '../../components/admin/CustomData'
import CustomTable from '../../components/admin/CustomTable'

const AdminDashboard = () => {
  return (
    <>
        <div className='text-xl font-semibold pb-3' > Dashboard </div>
        <div className='mb-12'>
            <CustomData/>
        </div>
        <div className='mx-5'>
            <CustomTable/>
        </div>

    </>
  )
}

export default AdminDashboard
