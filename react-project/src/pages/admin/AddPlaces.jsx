import React, { useState } from 'react'
import { Button, DatePicker , Form, Input, message } from 'antd';
import { useNavigate } from 'react-router';
import AdminMapComponent from '../../components/map/AdminMapComponent';

const { TextArea } = Input;

const AddPlaces = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleLocationSelect = (latlng) => {
        setLatitude(latlng.lat);
        setLongitude(latlng.lng);
        form.setFieldsValue({
            latitude: latlng.lat,
            longitude: latlng.lng,
        });
      };

    const onFinish = (values) => {
        setLoading(true);

        const formData = {
            ...values,
            latitude: values.latitude,
            longitude: values.longitude,
        };
        
        // Success Message
        setTimeout(() => {
            console.log('Request submitted:', values);
            localStorage.setItem('booking', "yes");
            messageApi.open({
                type: 'success',
                content: 'Your request has been sent successfully!',
              });
            form.resetFields();
            setLatitude('');
            setLongitude('');
            setLoading(false);
        }, 1000);
        navigate('/bookGuides')
    };
  return (
    <>
        {contextHolder}
        <div className=' py-10 flex items-center justify-center bg-[#f9f5f1]'>
        <div className="w-full p-6 max-w-[350px] md:min-w-[400px] border-gray-500 bg-white shadow-2xl">
            <h3 className="text-lg font-medium mb-4">Add a Place</h3>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
            >
                
                <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter place name' }]}
                >
                <Input placeholder="E.g. Godawari" />
                </Form.Item>

                <Form.Item
                name="description"
                label="Description"
                rules={[{ required: false }]}
                >
                <TextArea
                    style={{resize:"none"}}
                    placeholder="Eg. A tranquil paradise known for its rich biodiversity and serene environment" 
                    rows={4}
                />
                </Form.Item>

                <div className='flex justify-evenly'>
                    <Form.Item
                    style={{marginRight:"10px"}}
                    name="latitude"
                    label="Latitude"
                    rules={[{ required: true, message: 'Please enter latitude' }]}
                    >
                    <Input  />
                    </Form.Item>

                    <Form.Item
                    name="longitude"
                    label="Longitude"
                    rules={[{ required: true, message: 'Please enter longitude' }]}
                    >
                    <Input  />
                    </Form.Item>
                </div>
                
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
            <div>
                <AdminMapComponent onLocationSelect={handleLocationSelect} />
            </div>
        </div>

      
    </>
  )
}

export default AddPlaces
