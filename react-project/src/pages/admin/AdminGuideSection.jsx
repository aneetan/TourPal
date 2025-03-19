import React from 'react'
import { Button, Col, Row, Space, Table } from 'antd';
import { NavLink } from 'react-router';
import { PlusOutlined } from '@ant-design/icons';

const AdminGuideSection = () => {
    // const [data, setData] = useState([])
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        //   render: (_, item) => <NavLink to={`/admin/user/details/${item.id}`}>{item.name}</NavLink>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: "Action",
            dataIndex: "edit",
            key: "edit",
            render: () => (
                <Space size="middle">
                    <NavLink to=''> Edit </NavLink>
                    <Button type="primary"> Delete </Button>
                </Space>
            ),
        }
      ];

      const data = Array.from({
        length: 12,
      }).map((_, i) => ({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      }));

  return (
    <>
        <div className='flex justify-between py-4'>
          <div className='text-xl font-semibold pb-3' > Guides </div>
          <div>
              <Button type="primary" icon={<PlusOutlined />}>
                  Add Guide
              </Button>
          </div>
        </div>
        
        <div className='w-[95vw]'>
          <Row
              gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
              }}
          >
              <Col span={24}>
                <Table columns={columns} dataSource={data} />
              </Col>
          </Row>
        </div>
    </>
  )
}

export default AdminGuideSection
