import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Typography, Space, Button } from 'antd';
import CustomData from '../../components/admin/dashboard/CustomData';
import CustomTable from '../../components/CustomTable';
import useFetch from '../../hooks/useFetch';
import { UnderlineOutlined } from '@ant-design/icons';
import CustomModal from '../../components/CustomModal';
import { getAllGuides, updateGuide } from '../../utils/user.utils';
import { showSuccess } from '../../utils/toastify.utils';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const {data, error, loading} = useFetch("http://localhost:3000/guides");
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isDeclineOpen, setIsDeclineOpen] = useState(false);
  const [guideData, setGuideData] =  useState([])
  const [guideId, setGuideId] = useState(null)

  useEffect(()=> {
      getAllGuides().then ((response) => {
        setGuideData(
          response.filter(
            (message) => message.status === "pending"
          )
        )
      })
    }, [guideData])

    const showApproveModal = (id) => {
      setGuideId(id)
      setIsApproveOpen(true);
    };
  
    const showDeclineModal = (id) => {
      setGuideId(id)
      setIsDeclineOpen(true);
    };

  const handleApprove = async() => {
       try{
              const updateData = {
                status: "approved"
              }
          
              updateGuide(guideId, updateData)
              .then(() => {
                setIsApproveOpen(false)
                  showSuccess("User Approved Successfully")
                  getAllGuides().then((response)=> {
                   const filteredData =  response.filter(
                      (message) => message.status === "pending"
                    );
                    setGuideData(filteredData)
                  })
              })
          } catch(e) {
              console.log(e)
          }
    };
  
    const handleDecline = async() => {
      try{
        const updateData = {
          status: "declined"
        }
    
        updateGuide(guideId, updateData)
        .then(() => {
            setIsDeclineOpen(false)
            showSuccess("User Declined Successfully")
            getAllGuides().then((response)=> {
              const filteredData =  response.filter(
                 (message) => message.status === "pending"
               );
               setGuideData(filteredData)
             })
        })
  
    } catch(e) {
        console.log(e)
    }
    };

  const handleCancel = () => {
    setIsApproveOpen(false);
    setIsDeclineOpen(false);
  };

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
      render: (text, record) => <a href={`/admin/guideProfile/${record.id}`}>{text}</a>, 
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
      title: 'Document',
      dataIndex: 'document',
      key: 'document',
      render: () => <a className='underline' target="_blank" href="https://www.alexholidays.com/tours/images/credentials/Tourist-Guide-Alex--2016-2018.jpg"> View Document </a>,
      responsive: ['md'],
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button color='primary' onClick={() => showApproveModal(record.id)} variant='solid'>Approve</Button>
          <CustomModal
            title="Are you sure to approve the user as guide?"
            content="This user will get access to the guide section"
            text="Approve"
            isOpen={isApproveOpen}
            handleOk={handleApprove}
            handleCancel={handleCancel}
          />
          <Button color='danger' onClick={() => showDeclineModal(record.id)} variant="solid">Decline</Button>
          <CustomModal
            title="Are you sure to decline the user as guide?"
            content="This action cannot be undone"
            text="Decline"
            isOpen={isDeclineOpen}
            handleOk={handleDecline}
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

      <CustomData/>

      
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <h2 className='font-semibold py-2'> Recent Guide Requests</h2>
          <CustomTable tableData={flattenedData} columns={columns}/>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;