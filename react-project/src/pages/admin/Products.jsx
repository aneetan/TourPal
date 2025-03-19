import React, { useState } from 'react';
import { Table, Card, Input, Button, Space, Tag } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

const Products = () => {
  // Mock product data
  const productsData = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'][Math.floor(Math.random() * 5)],
    price: Math.floor(Math.random() * 1000) + 10,
    stock: Math.floor(Math.random() * 100),
    status: ['In Stock', 'Low Stock', 'Out of Stock'][Math.floor(Math.random() * 3)],
  }));

  const [searchText, setSearchText] = useState('');
  const [tableData, setTableData] = useState(productsData);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: productsData.length,
  });

  // Handle table change (pagination, filters, sorter)
  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };

  // Handle search functionality
  const handleSearch = (value) => {
    setSearchText(value);
    const filteredData = productsData.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
    );
    setTableData(filteredData);
    setPagination({
      ...pagination,
      current: 1,
      total: filteredData.length,
    });
  };

  // Reset search
  const handleReset = () => {
    setSearchText('');
    setTableData(productsData);
    setPagination({
      ...pagination,
      current: 1,
      total: productsData.length,
    });
  };

  // Status tag renderer
  const renderStatusTag = (status) => {
    let color = 'green';
    if (status === 'Low Stock') color = 'orange';
    if (status === 'Out of Stock') color = 'red';
    return <Tag color={color}>{status}</Tag>;
  };

  // Define table columns
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: renderStatusTag,
      filters: [
        { text: 'In Stock', value: 'In Stock' },
        { text: 'Low Stock', value: 'Low Stock' },
        { text: 'Out of Stock', value: 'Out of Stock' },
      ],
      onFilter: (value, record) => record.status === value,
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
    <div className="products-page">
      <Card
        title="Products"
        extra={
          <Button type="primary" icon={<PlusOutlined />}>
            Add Product
          </Button>
        }
      >
        <div style={{ marginBottom: 16 }}>
          <Space>
            <Input
              placeholder="Search products"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              allowClear
              suffix={<SearchOutlined />}
              style={{ width: 250 }}
            />
            {searchText && (
              <Button onClick={handleReset}>Reset</Button>
            )}
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
  );
};

export default Products;