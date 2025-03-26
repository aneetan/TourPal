import { Button, Card, Checkbox, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router';
import { authenticateUser } from '../../utils/user.utils';
import { showError } from '../../utils/toastify.utils';
const { Option } = Select;

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const PasswordUser = () => {
  const navigate = useNavigate();
  let {id} = useParams();

    const onFinish = async(values) => {
        const email = localStorage.getItem("email")
        const {password} = values;
        const user = await authenticateUser(email, password);
        if(user){   
            if(user.email === email && user.password === values.password){
                navigate(`/user/changePw/${id}`)
            } 
        } else {
            showError("Incorrect password")
        }
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

export default PasswordUser