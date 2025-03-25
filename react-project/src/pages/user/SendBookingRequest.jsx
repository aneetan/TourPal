import React, { useState } from 'react'
import { Button, DatePicker , Form, Input} from 'antd';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { addMessages } from '../../utils/user.utils';
import { showSuccess } from '../../utils/toastify.utils';
dayjs.extend(customParseFormat);

const { TextArea } = Input;

const SendBookingRequest = () => {
    const dateFormat = 'YYYY-MM-DD';
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let currentDate = new Date().toJSON().slice(0, 10);
    let {id} = useParams();

    const onFinish = async(values) => {
        setLoading(true);

        try{
            const formData = {
                ...values,
                guideId: id,
                user: localStorage.getItem('username'),
            }
            await addMessages(formData);
            form.resetFields();
            localStorage.setItem("is_booked", 1)
            showSuccess("Guide Requested Successfully")
            navigate('/viewGuides')
        } catch(error){
            console.log("Error submitting form", error)
        } finally {
            setLoading(false)
        }
        
    };

  return (
    <>
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
