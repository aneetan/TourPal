import { Button, Card, Checkbox, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const ChangePwForm = () => {
  const navigate = useNavigate();
  let {id} = useParams();
//   const {data, loading, error} = useFetch(`http://localhost:3000/guides/${id}`)

const onFinish = () => {

}

  return (
        <Form 
            onFinish={onFinish} 
            layout="vertical"
            className="max-w-2xl mx-auto"
        >
        <Form.Item
            name="password"
            label="Enter New Password"
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

            <Form.Item
            name="password"
            label="Confirm Password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            dependencies={['password']}
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                        }
                        return Promise.reject('Password do not match!');
                    },
                    }),
            ]}
            >
            <Input.Password
            style={{padding:"10px", outline:"none"}}
            placeholder="Confirm password"
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

export default ChangePwForm