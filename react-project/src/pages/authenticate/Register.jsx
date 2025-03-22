import React from 'react'
import { Button, Checkbox, Form, Input,Typography } from 'antd';
const { Title } = Typography;

const Register = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

  return (
    <>
        <div className="max-w-sm mx-auto h-[100vh] justify-center items-center flex">
            <div className='border-2 p-12 border-amber-400'>
                <Title className='text-center' level={2}>Login</Title>
                <Form   
                    name="basic"
                    labelCol={{
                    span: 8,
                    }}
                    wrapperCol={{
                    span: 16,
                    }}
                    style={{
                    maxWidth: 600,
                    }}
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input/>
                    </Form.Item>

                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password/>
                    </Form.Item>

                    <div className='flex justify-between w-full float-left text-[1rem]'>
                        <Form.Item name="remember" valuePropName="checked">
                        <Checkbox onChange={onChange}>Remember Me</Checkbox>
                        </Form.Item>

                        <Title level={5}>
                            <a href='#'> Forgot Password?</a>
                        </Title>
                    </div>
                    
                    <Button
                        type="primary"
                        className='rounded-lg w-full px-5 py-2.5 text-center float-left'
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </div>
          
        </div>


    </>
  )
}

export default Register
