import React, { useEffect, useState } from 'react'
import { Button, Select , Form, Input, message, Upload  } from 'antd';
import { useNavigate, useParams } from 'react-router';
import AdminMapComponent from '../../components/map/AdminMapComponent';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
import { addPlace, updatePlace } from '../../utils/user.utils';
import useFetch from '../../hooks/useFetch';
import { showSuccess } from '../../utils/toastify.utils';

const { TextArea } = Input;
const { Option } = Select;

const AddPlacesAdmin = () => {
    let {id} = useParams();
    const [form] = Form.useForm();
    const [load, setLoad] = useState(false);
    const {data, loading, error} = useFetch(`http://localhost:3000/places/${id}`)
    const navigate = useNavigate();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(()=> {

        if(data){
            form.setFieldsValue({
                name: data.name,
                category: data.category,
                description: data.description,
                latitude: data.latitude,
                longitude: data.longitude
            });
            setLatitude(data.latitude);
            setLongitude(data.longitude);
        }
    }, [data, form])



    const handleLocationSelect = (latlng) => {
        setLatitude(latlng.lat);
        setLongitude(latlng.lng);
        form.setFieldsValue({
            latitude: latlng.lat,
            longitude: latlng.lng,
        });
      };

    const onFinish = async(values) => {
        setLoad(true);
        const formData = {
            ...values,
            latitude: values.latitude,
            longitude: values.longitude,
        };

        if(!id){
            addPlace(formData)
            .then(() => {
                form.resetFields()
                setLatitude('');
                setLongitude('');
                setLoad(false)
                showSuccess("Place added")
                navigate('/admin/places')
            }); 
        } else {
            updatePlace(id, formData)
            .then(()=> {
                navigate('/admin/places')
            })
        }   
    };


  return (
    <div className="min-h-screen w-[100%]">
        <div className="container">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pl-4">
                    <AdminMapComponent onLocationSelect={handleLocationSelect} />
                </div>

                <div className="w-full lg:w-1/2 py-16 px-12">
                <h3 className="text-2xl font-medium">
                    {id? "Update ": "Add "} Place</h3>
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
                        name="category"
                        label="Category"
                        rules={[{ required: true, message: 'Please select a category' }]}
                        >
                        <Select
                        placeholder="--Select---"
                        allowClear
                        >
                        <Option value="Religious">Religious</Option>
                        <Option value="Historical">Historical</Option>
                        <Option value="Nature">Nature</Option>
                        <Option value="Others">Others</Option>
                        </Select>
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
                            loading={load}
                            block
                            style={{backgroundColor:"#F15D30"}}
                            className="bg-amber-500 transiiton hover:opacity-90 hover:scale-[1.004]"
                        >
                            {id? "Update": "Add"}
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
