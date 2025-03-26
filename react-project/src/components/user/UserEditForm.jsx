import { Button, Card, Form, Input, Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router';
import { updateUser } from '../../utils/user.utils';
import { showSuccess } from '../../utils/toastify.utils';

const UserEditForm = () => {
  const [form] = Form.useForm();
  let {id} = useParams();
  const navigate = useNavigate();
  const {data, loading, error} = useFetch(`http://localhost:3000/users/${id}`);

  useEffect((values)=> {
    if(data) {
        form.setFieldsValue({
            name: data.name,
            email: data.email,
            number: data.number
        })
    }
  },[data, form])

  const onFinish = async(values) => {
    try{
        const updateData = {
            ...values
        }
    
        updateUser(id, updateData)
        .then(() => {
            showSuccess("User Updated Successfully")
            navigate('/')
        })
    } catch(e) {
        console.log(e)
    }
  }

  return (
    <>
        <div className='flex justify-center items-center'>
            <Card title="Profile Information" variant='borderless' className='w-full'>
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
                name="number"
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
      
    </>
  )
}

export default UserEditForm
