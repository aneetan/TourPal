import React, { useEffect, useState } from 'react';
import { Table, Card, Space, Tag, Typography, Descriptions, Modal } from 'antd';
import SearchBar from '../../components/admin/header/SearchBar';
import CustomTable from '../../components/CustomTable';
import { getAllMessages } from '../../utils/user.utils';
import dayjs from 'dayjs';
import { Link } from 'react-router';
const { Title } = Typography;

const ViewBookings = () => {
    const [data, setData] = useState([])
    const tableData = data || []
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [load, setLoad] = useState(false)
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState()
    
    

    useEffect(()=> {
      getAllMessages().then((response) => {
        setData(response)
      })
    }, [])

    const showModal = async(name) => {
      setIsModalOpen(true);
      setLoad(true);
      setUserId(name)
  
  
      try{
        const response = await fetch(`http://localhost:3000/users/${name}`);
        const data = await response.json();
        setUser(data)
  
      } catch (e){
        console.log(e)
      } finally{
        setLoad(false)
      }
  
    };
  
  
    const handleModalOk = () => {
      setIsModalOpen(false);
    };
  
    const handleModalCancel = () => {
      setIsModalOpen(false);
    };

    const columns = [
        {
          title: 'User',
          dataIndex: 'user',
          key: 'user',
          sorter: (a, b) => a.name.localeCompare(b.name),
          render: (text, record) => (
            <Space>
              <a onClick={() => showModal(record.userId)}>{text}</a>

              <Modal title="User Detail" open={isModalOpen} onOk={handleModalOk} onCancel={handleModalCancel}>
                  {user &&(
                    <Descriptions bordered column={1}>
                    <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                    <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                    <Descriptions.Item label="Number">
                      {user.number}
                    </Descriptions.Item>
                  </Descriptions>
                  )}
              </Modal>
            </Space>

          ), 
        },
        {
          title: 'Destination',
          dataIndex: 'destination',
          key: 'destination',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          render: (date) => dayjs(date).format('YYYY-MM-DD'),
          responsive: ['md'],
        },
        {
          title: 'Guide',
          dataIndex: 'guideName',
          key: 'guideName',
          render: (text, record) => (<Link to={`/admin/guideProfile/${record.guide}`} >{text}</Link>),
          responsive: ['md'],
        },
        {
          title: 'Message',
          dataIndex: 'message',
          key: 'message',
          responsive: ['md'],
        },
        {
          title: 'Status',
          key: 'status',
          render: (_, record) => (
            <Tag
            color={
              record.status === 'pending' ? 'blue' : 
              record.status === 'approved' ? 'green' : 
              'red'
            }
            style={{
              fontWeight: 500,
              textTransform: 'capitalize'
            }}
          >
            {record.status}
          </Tag>
          ),
        },
      ];

    return (
        <div>
            <Card>
              <Title level={3}> Bookings</Title>

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

export default ViewBookings
