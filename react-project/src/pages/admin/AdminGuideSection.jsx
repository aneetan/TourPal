import React, { useState } from 'react';
import { Table, Card, Input, Button, Space, Tag, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;

const AdminGuideSection = () => {
    const guideData = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        category: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'][Math.floor(Math.random() * 5)],
        price: Math.floor(Math.random() * 1000) + 10,
        stock: Math.floor(Math.random() * 100),
        status: ['In Stock', 'Low Stock', 'Out of Stock'][Math.floor(Math.random() * 3)],
      }));

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: guideData.length,
      });

    const [tableData, setTableData] = useState(guideData);
    
    
    const handleTableChange = (pagination, filters, sorter) => {
        setPagination(pagination);
    };

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => a.id - b.id,
        },
        {
          title: 'Product Name',
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
          title: 'Price',
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

                <Button type="primary" icon={<PlusOutlined />}>
                      Add Guides
                  </Button>
                
              </div>

                <div style={{ marginBottom: 16 }}>
                <Space>
                    <Input
                    placeholder="Search "
                    allowClear
                    suffix={<SearchOutlined />}
                    style={{ width: '90%' }}
                    />
                </Space>
                </div>

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
            </Card>
        </div>
    )
}

export default AdminGuideSection
