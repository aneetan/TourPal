import React, { useState } from 'react';
import { Table, Card, Input, Button, Space, Tag, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import SearchBar from '../../components/admin/header/SearchBar';
import CustomTable from '../../components/CustomTable';
import useFetch from '../../hooks/useFetch';
const { Title, Paragraph } = Typography;

const UserSection = () => {
    const { data, loading, error } = useFetch("http://localhost:3000/users");

    if (loading) return <h1> Loading ...</h1>;
    // if(error) console.log(error) 

    const tableData = data || []

    const columns = [
        {
          title: 'Full Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Number',
          dataIndex: 'number',
          key: 'number',
          responsive: ['md'],
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="small">
              <Button size="small" danger> Delete </Button>
            </Space>
          ),
        },
      ];

    return (
        <div>
            <Card>
              <Title level={3}>Users</Title>

                <div style={{ marginBottom: 16 }}>
                <Space>
                    <SearchBar/>
                </Space>
                </div>

                <CustomTable tableData={tableData} columns={columns}/>
            </Card>
        </div>
    )
}

export default UserSection
