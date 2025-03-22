import React from 'react'
import { Button, Form, Input } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import UploadFile from './UploadFile'


const DocumentsForm = ({onFinish, initialValues}) => {
  return (
    <>
        <Form onFinish={onFinish} initialValues={initialValues}>
            <div className='container flex  justify-between'>
                <div className='w-full px-4 md:px-8'>
                    <Form.Item
                    name="documents"
                    label="Upload documents"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                        {
                        required: false,
                        message: 'Please input your number!',
                        }
                    ]}
                    >
                        <UploadFile/>
                    </Form.Item>
                </div>

            </div>
        
            <div className="w-full md:w-[14%] float-right">
                <Button type="primary"
                htmlType="submit"
                className="w-full md:w-auto mr-12 hover:drop-shadow-md hover:scale-102 transition
                cursor-pointer duration-300 ease-in-out font-bold"
                >
                Register
                </Button>
            </div>
        </Form>
      
    </>
  )
}

export default DocumentsForm
