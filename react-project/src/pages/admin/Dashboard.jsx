import React, { useState } from 'react';
import { Card, Row, Col, Typography, Space, Button } from 'antd';
import CustomData from '../../components/admin/dashboard/CustomData';
import CustomTable from '../../components/CustomTable';
import useFetch from '../../hooks/useFetch';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const {data, error, loading} = useFetch("http://localhost:3000/guides");

  const guideData = data || []

  const flattenedData = guideData.map((guide)=>({
    id: guide.id,
    email: guide.personalDetails.email,
    name: guide.personalDetails.name,
    phone: guide.personalDetails.phone,
    speciality: guide.professionalInfo.speciality,
    experience: guide.professionalInfo.experience,
  }))

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Speciality',
      dataIndex: 'speciality',
      key: 'speciality',
      filters: [
        { text: 'Adventure & Nature', value: 'Adventure & Nature' },
        { text: 'Cultural & Historical', value: 'Cultural & Historical' },
        { text: 'City & Lifestyle', value: 'City & Lifestyle' },
        { text: 'Outdoor Activities', value: 'Outdoor Activities' },
        { text: 'Others', value: 'Others' },
      ],
      onFilter: (value, record) => record.speciality === value,
    },
    {
      title: 'Experience',
      dataIndex: 'experience',
      key: 'experience',
      responsive: ['md'],
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
           <CustomTable tableData={flattenedData} columns={columns}/>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;