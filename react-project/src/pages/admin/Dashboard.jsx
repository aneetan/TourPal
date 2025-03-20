import React, { useState } from 'react';
import { Card, Row, Col, Typography, Space, Button } from 'antd';
import CustomData from '../../components/admin/dashboard/CustomData';
import CustomTable from '../../components/CustomTable';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  // Mock data for recent activities
  // const activities = [
  //   { id: 1, user: 'User 1', action: 'completed an order', time: '2 minutes ago' },
  //   { id: 2, user: 'User 2', action: 'completed an order', time: '5 minutes ago' },
  //   { id: 3, user: 'User 3', action: 'completed an order', time: '10 minutes ago' },
  //   { id: 4, user: 'User 4', action: 'completed an order', time: '15 minutes ago' },
  // ];

  const guideData = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'][Math.floor(Math.random() * 5)],
    price: Math.floor(Math.random() * 1000) + 10,
    stock: Math.floor(Math.random() * 100),
    status: ['In Stock', 'Low Stock', 'Out of Stock'][Math.floor(Math.random() * 3)],
  }));

const [tableData, setTableData] = useState(guideData);

const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Place Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sorter: (a, b) => a.category.localeCompare(b.category),
      filters: [
        { text: 'Electronics', value: 'Electronics' },
        { text: 'Clothing', value: 'Clothing' },
        { text: 'Food', value: 'Food' },
        { text: 'Books', value: 'Books' },
        { text: 'Toys', value: 'Toys' },
      ],
      onFilter: (value, record) => record.category === value,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      sorter: (a, b) => a.price - b.price,
      // render: (price) => `$${price.toFixed(2)}`,
      responsive: ['md'],
    },
    {
      title: 'Latitude',
      dataIndex: 'lat',
      key: 'lat',
      sorter: (a, b) => a.stock - b.stock,
      responsive: ['lg'],
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button type="link" size="small">Edit</Button>
          <Button type="link" size="small" danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="site-card-wrapper">
      <div style={{ marginBottom: 24 }}>
        <Title level={3}>Dashboard</Title>
      </div>

      <CustomData/>

      
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
           <CustomTable tableData={tableData} columns={columns}/>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;