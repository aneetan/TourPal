import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'
import React from 'react'

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const PersonalDetails = ({onFinish, initialValues} ) => {
  return (
    <>
        <Form onFinish={onFinish} initialValues={initialValues}>
            <div className='container flex flex-wrap justify-between'>
                <div className='w-full md:w-1/2 px-4 md:px-8'>
                    <Form.Item
                    label="Name"
                    name="name"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                        {
                        required: true,
                        message: 'Please input your name',
                        }
                    ]}
                    >
                    <Input
                    style={{padding:"10px", outline: "none", float:"left"}}
                    name="name"
                    placeholder="Enter Your Name"
                    />
                    </Form.Item>

                </div>
                <div className='w-full md:w-1/2 px-4 md:px-8'>
                    <Form.Item
                    name="email"
                    label="Email"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                        {
                        required: true,
                        message: 'Please input your email!',
                        },
                        {
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Please enter a valid email address!',
                        },
                    ]}
                    >
                        <Input
                        style={{padding:"10px", outline: "none"}}
                        name='email'
                        placeholder="Enter Email"
                        />
                    </Form.Item>
                </div>
            </div>

            <div className='container flex flex-wrap justify-between'>
                <div className='w-full md:w-1/2 px-4 md:px-8'>
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

                </div>
                <div className='w-full md:w-1/2 px-4 md:px-8'>
                    <Form.Item
                    name="password2"
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
                    name='password'
                    style={{padding:"10px", outline:"none"}}
                    placeholder="Confirm password"
                    />
                    </Form.Item>
                </div>
            </div>

            <div className='container flex  justify-between'>
                <div className='w-full px-4 md:px-8'>
                    <Form.Item
                    name="phone"
                    label="Phone No"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                        {
                        required: true,
                        message: 'Please input your number!',
                        },
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
                        style={{padding:"10px", outline: "none"}}
                        name='number'
                        placeholder="Enter number"
                        />
                    </Form.Item>
                </div>
            </div>
            <div className="w-full md:w-[14%] float-right">
                <Button type="primary"
                htmlType="submit"
                className="w-full md:w-auto mr-12 hover:drop-shadow-md hover:scale-102 transition
                cursor-pointer duration-300 ease-in-out font-bold"
                >
                Next <ArrowRightOutlined/>
                </Button>
            </div>
        </Form>
      
    </>
  )
}

export default PersonalDetails
