import React, { useState } from 'react'
import { Col, Row, Table } from 'antd';

const CustomTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const dataSource = Array.from({
    length: 12,
  }).map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  }));
  
  return (
    <>
        <Row
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}
        >
            <Col span={24}>
              <Table columns={columns} dataSource={dataSource} />
            </Col>
        </Row>

      
    </>
  )
}

export default CustomTable
