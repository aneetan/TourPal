import React, { useState } from 'react'
import { Button, DatePicker , Form, Input, message } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const { TextArea } = Input;

const SendBookingRequest = () => {
    const dateFormat = 'YYYY-MM-DD';
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let currentDate = new Date().toJSON().slice(0, 10);

    const onFinish = (values) => {
        console.log(currentDate);
        setLoading(true);
        
        // Success Message
        setTimeout(() => {
            console.log('Request submitted:', values);
            localStorage.setItem('booking', "yes");
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
        <div className=' py-10 flex align-bottom justify-center bg-[#f9f5f1]'>
        <div className="w-full p-6 max-w-[350px] md:min-w-[400px] border-gray-500 bg-white shadow-2xl">
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
                name="date"
                label="Date"
                rules={[{ required: true, message: 'Please enter date for booking' }]}
                >
                <DatePicker
                    defaultValue={dayjs(`${currentDate}`, dateFormat)}
                    minDate={dayjs({currentDate}, dateFormat)}
                />
                </Form.Item>

                <Form.Item
                name="message"
                label="Message"
                rules={[{ required: false }]}
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
