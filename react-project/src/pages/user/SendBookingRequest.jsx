import React, { useState } from 'react'
import { Button, Popover, Form, Input, Select, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const { Option } = Select;
const { TextArea } = Input;

const SendBookingRequest = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Form submitted with values:', values);
        setLoading(true);
        
        // Success Message
        setTimeout(() => {
            console.log('Request submitted:', values);
            localStorage.setItem('booking', "yes");
            // localStorage.setItem('guideId', useParams.id)
            messageApi.open({
                type: 'success',
                content: 'Your request has been sent successfully!',
              });
            form.resetFields();
            setLoading(false);
        }, 1000);
        navigate('/bookGuides')

    };

  return (
    <>
        {contextHolder}
        <div className=' py-10 flex align-bottom justify-center bg-[#F9FAFC]'>
        <div className="w-full p-6 max-w-[350px] md:min-w-[400px] border-gray-500 shadow-2xl">
            <h3 className="text-lg font-medium mb-4">Send a Custom Request</h3>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
            >
                
                <Form.Item
                name="destination"
                label="Destination"
                rules={[{ required: true, message: 'Please enter your desired destination' }]}
                >
                <Input placeholder="Where do you want to go?" />
                </Form.Item>
                
                <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please describe your request' }]}
                >
                <TextArea
                    style={{resize:"none"}}
                    placeholder="Describe what you're looking for..." 
                    rows={4}
                />
                </Form.Item>
                
                <Form.Item className="mb-0">
                <Button 
                    type="primary" 
                    htmlType="submit" 
                    loading={loading}
                    block
                    style={{backgroundColor:"#F15D30"}}
                    className="bg-amber-500 transiiton hover:opacity-90 hover:scale-[1.004]"
                >
                    Send Request
                </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    </>
  )
}

export default SendBookingRequest
