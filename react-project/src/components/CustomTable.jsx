import { Table } from 'antd';
import React, { useState } from 'react'

const CustomTable = ({columns, tableData}) => {
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: tableData.length,
    });

    const handleTableChange = (pagination) => {
        setPagination(pagination);
    };
    
  return (
    <>
         <Table
            columns={columns}
            dataSource={tableData}
            rowKey="id"
            pagination={pagination}
            onChange={handleTableChange}
            scroll={{ x: 800 }}
            size="middle"
            bordered
        />
      
    </>
  )
}

export default CustomTable
