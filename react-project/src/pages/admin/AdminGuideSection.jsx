import React, { useState } from 'react';
import { Table, Card, Input, Button, Space, Tag, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import SearchBar from '../../components/admin/header/SearchBar';
import CustomTable from '../../components/CustomTable';
import { useNavigate } from 'react-router';
const { Title, Paragraph } = Typography;

const AdminGuideSection = () => {
    const navigate = useNavigate();

    const guideData = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        category: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'][Math.floor(Math.random() * 5)],
        price: Math.floor(Math.random() * 1000) + 10,
        stock: Math.floor(Math.random() * 100),
        status: ['In Stock', 'Low Stock', 'Out of Stock'][Math.floor(Math.random() * 3)],
      }));

    const handleAddGuides= () => {
      navigate('/admin/guides/add')
    }

    const [tableData, setTableData] = useState(guideData);
  
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          render: (text) =>
          <div className='flex items-center'>
            <img src='https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg'
            className='w-[40px] mx-2' alt='pro'/>
            <a href="#">{text}</a>
          </div>,
        },
        {
          title: 'Skill',
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
          dataIndex: 'price',
          key: 'price',
          sorter: (a, b) => a.price - b.price,
          render: (price) => `$${price.toFixed(2)}`,
          responsive: ['md'],
        },
        {
          title: 'Stock',
          dataIndex: 'stock',
          key: 'stock',
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
        <div>
            <Card>
              <div className='flex justify-between items-center my-2'>
                <Title level={3}>Guides</Title>

                <Button type="primary" onClick={handleAddGuides} icon={<PlusOutlined />}>
                      Add Guides
                  </Button>
                
              </div>

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

export default AdminGuideSection
