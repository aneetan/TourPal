import React, { useState } from 'react'
import { Button, DatePicker , Form, Input, message } from 'antd';
import { useNavigate } from 'react-router';
import AdminMapComponent from '../../components/map/AdminMapComponent';

const { TextArea } = Input;

const AddPlacesAdmin = () => {
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
    <div className="min-h-screen w-[100%]">
        <div className="container">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pl-4">
                    <AdminMapComponent onLocationSelect={handleLocationSelect} />
                </div>

                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h3 className="text-2xl font-medium">Add a Place</h3>
                    <p className="text-sm font-small mt-2 text-[#FF9248]">(You can select location in map)</p>

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
                            Add
                        </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPlacesAdmin
