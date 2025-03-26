import { Button, Card, Checkbox, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
const { Option } = Select;

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const PasswordForm = () => {
  const navigate = useNavigate();
  let {id} = useParams();
//   const {data, loading, error} = useFetch(`http://localhost:3000/guides/${id}`)

    const onFinish = () => {
        navigate('/guide/settings/changePw')
    }
  return (
        <Form 
            onFinish={onFinish} 
            layout="vertical"
            className="max-w-2xl mx-auto"
        >
        <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
                {
                    validator(_, value) {
                        if (!value || strongPasswordRegex.test(value)) {
                        return Promise.resolve();
                        }
                        return Promise.reject(
                        'Please enter at least 8 chars with number, symbol and capital letter'
                        );
                    },                                  
                },
            ]}
            >
            <Input.Password
            style={{padding:"10px", outline:"none"}}
            placeholder="Enter password"
            name='password'
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
                Continue
            </Button>
            </Form.Item>
        </Form>
    
  )
}

export default PasswordForm