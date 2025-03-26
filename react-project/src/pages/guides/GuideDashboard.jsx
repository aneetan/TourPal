import React, { useState } from 'react';
import { Card, Row, Col, Typography, Space, Button, Modal, Descriptions } from 'antd';
import CustomData from '../../components/admin/dashboard/CustomData';
import CustomTable from '../../components/CustomTable';
import useFetch from '../../hooks/useFetch';
import { UnderlineOutlined } from '@ant-design/icons';
import CustomModal from '../../components/CustomModal';
import CustomGuideData from '../../components/guide/CustomGuideData';
import dayjs from 'dayjs';

const { Title, Paragraph } = Typography;

const GuideDashboard = () => {
  const {data, error, loading} = useFetch("http://localhost:3000/messages");
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isDeclineOpen, setIsDeclineOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [load, setLoad] = useState(false)
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState()

  const showModal = async(name) => {
    setIsModalOpen(true);
    setLoad(true);
    setUserId(name)


    try{
      const response = await fetch(`http://localhost:3000/users/${name}`);
      const data = await response.json();
      setUser(data)
  console.log(user)

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

  const showApproveModal = () => {
    setIsApproveOpen(true);
  };

  const showDeclineModal = () => {
    setIsDeclineOpen(true);
  };
  const handleOk = () => {
    setIsApproveOpen(false);
    setIsDeclineOpen(false);
  };
  const handleCancel = () => {
    setIsApproveOpen(false);
    setIsDeclineOpen(false);
  };

  const msgData = data || []


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
      key: 'destination'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => dayjs(date).format('YYYY-MM-DD'),
      filters: [
        { text: '2025-03-31', value: '2025-03-31' },
        { text: '2025-03-32', value: '2025-03-32' },
        { text: '2025-04-01', value: '2025-04-01' },
        { text: '2025-04-02', value: '2025-04-02' },
        { text: '2025-04-03', value: '2025-04-03' },
      ],
      onFilter: (value, record) => {
        return dayjs(record.date).format('YYYY-MM-DD') === value;
      },
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button color='primary' onClick={showApproveModal} variant='solid'>Approve</Button>
          <CustomModal
            title="Are you sure to approve the user request?"
            content=""
            text="Approve"
            isOpen={isApproveOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
          <Button color='danger' onClick={showDeclineModal} variant="solid">Decline</Button>
          <CustomModal
            title="Are you sure to decline the user request?"
            content="This action cannot be undone"
            text="Decline"
            isOpen={isDeclineOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="site-card-wrapper">
      <div style={{ marginBottom: 24 }}>
        <Title level={3}>Dashboard</Title>
      </div>

      <CustomGuideData/>

      
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <h2 className='font-semibold py-2'> Recent Booking Requests</h2>
          <CustomTable tableData={msgData} columns={columns}/>
        </Col>
      </Row>
    </div>
  );
};

export default GuideDashboard;