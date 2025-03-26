import { Button, Card, Checkbox, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { getAllGuides, updateGuide } from '../../utils/user.utils';
import useFetch from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'antd/es/form/Form';
const { Option } = Select;

const EditGuideProfile = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  let {id} = useParams();
  const {data, loading, error} = useFetch(`http://localhost:3000/guides/${id}`)

  const languageOptions = [
    { label: 'English', value: 'English' },
    { label: 'Spanish', value: 'Spanish' },
    { label: 'French', value: 'French' },
    { label: 'German', value: 'German' },
    { label: 'Chinese', value: 'Chinese' },
  ];

  useEffect(()=> {
    if(data) {
        form.setFieldsValue({
            name: data.personalDetails?.name,
            email: data.personalDetails?.email,
            phone: data.personalDetails?.phone,
            speciality: data.professionalInfo?.speciality,
            Bio: data.professionalInfo?.Bio,
            experience: data.professionalInfo?.experience,
            languages: data.professionalInfo?.languages,
            pricing: data.professionalInfo?.pricing,
        })
        setSelectedLanguages(data.professionalInfo?.languages || []);
    }

  }, [data, form]);

  if (!data) return <p>No guide found.</p>;

  const onFinish = async(values) => {
    try{
        const updatedData ={
            ...data,
            personalDetails:{
                ...data.personalDetails,
                name: values.name,
                email: values.email,
                phone: values.phone
            },
            professionalInfo:{
                ...data.professionalInfo,
                speciality: values.speciality,
                Bio: values.Bio,
                experience: values.experience,
                languages: values.languages,
                pricing: values.pricing,
            }
        };

        updateGuide(id, updatedData)
        .then(() => {
            navigate(`/guide/profile/${id}`)
        })
    } catch(e){
        console.log(e)
    }
  }


  return (
    <div className='flex justify-center'>
        <Card className='w-full max-w-2xl'>
        <Form 
            onFinish={onFinish} 
            form={form}
            layout="vertical"
            className="max-w-2xl mx-auto"
        >
            {/* Name */}
            <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name' }]}
            >
            <Input
                size="large"
                placeholder="Enter Your Name"
                className="w-full"
            />
            </Form.Item>

            {/* Email */}
            <Form.Item
            name="email"
            label="Email"
            rules={[
                { required: true, message: 'Please input your email!' },
                {
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email address!',
                },
            ]}
            >
            <Input
                size="large"
                placeholder="Enter Email"
                className="w-full"
            />
            </Form.Item>

            {/* Phone */}
            <Form.Item
            name="phone"
            label="Phone No"
            rules={[
                { required: true, message: 'Please input your number!' },
                ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || /^\d{10}$/.test(value)) {
                    return Promise.resolve();
                    }
                    return Promise.reject(new Error('Please enter a valid 10-digit number!'));
                },
                }),
            ]}
            >
            <Input
                size="large"
                placeholder="Enter phone number"
                className="w-full"
            />
            </Form.Item>

            {/* Speciality */}
            <Form.Item
            name="speciality"
            label="Speciality"
            rules={[{ required: true, message: 'Please select one speciality!' }]}
            >
            <Select
                size="large"
                placeholder="---Speciality---"
                className="w-full"
            >
                <Option value="Adventure & Nature">Adventure & Nature</Option>
                <Option value="Cultural & Historical">Cultural & Historical</Option>
                <Option value="City & Lifestyle">City & Lifestyle</Option>
                <Option value="Outdoor Activities">Outdoor Activities</Option>
                <Option value="Others">Others</Option>
            </Select>
            </Form.Item>

            {/* Bio */}
            <Form.Item
            name="Bio"
            label="Bio"
            rules={[{ required: true, message: 'Please input your bio!' }]}
            >
            <Input.TextArea
                style={{resize: "none"}}
                rows={4}
                placeholder="A short description about yourself"
                className="w-full"
            />
            </Form.Item>

            {/* Experience */}
            <Form.Item
            name="experience"
            label="Experience (in years)"
            rules={[{ required: true, message: 'Please select your experience' }]}
            >
            <Select
                size="large"
                placeholder="---Experience---"
                className="w-full"
            >
                <Option value="0-1">0-1</Option>
                <Option value="2-3">2-3</Option>
                <Option value="3-4">3-4</Option>
                <Option value="5+">5+</Option>
            </Select>
            </Form.Item>

            {/* Languages */}
            <Form.Item
            name="languages"
            label="Select Languages"
            rules={[{ required: true, message: 'Please select at least one language!' }]}
            >
            <Checkbox.Group
                options={languageOptions}
                onChange={(checkedValues) => setSelectedLanguages(checkedValues)}
                className="grid grid-cols-2 md:grid-cols-3 gap-2"
            />
            </Form.Item>

            <Form.Item
            name="pricing"
            label="Pricing (Hourly)"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
                {
                required: true,
                message: 'Please enter your estimated price',
                }
            ]}
            >
            <Input
            style={{padding:"6px", outline:"none"}}
            placeholder="Please enter your estimated price"
            />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item className="text-left">
            <Button 
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full md:w-auto"
            >
                Update
            </Button>
            </Form.Item>
        </Form>
        </Card>
    </div>
    
  )
}

export default EditGuideProfile