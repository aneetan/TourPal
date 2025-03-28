import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Checkbox } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'
const { Option } = Select;

const ProfessionalInfo = ({onFinish, initialValues}) => {
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const languages = [
        { label: 'English', value: 'English' },
        { label: 'Spanish', value: 'Spanish' },
        { label: 'French', value: 'French' },
        { label: 'German', value: 'German' },
        { label: 'Chinese', value: 'Chinese' },
      ];

  return (
    <>
        <Form onFinish={onFinish} initialValues={initialValues}>
        <div className='container flex  justify-between'>
                <div className='w-full px-4 md:px-8'>
                    <Form.Item
                    name="Bio"
                    label="Bio"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                        {
                        required: true,
                        message: 'Please input your bio!',
                        }
                    ]}
                    >
                        <Input.TextArea
                        style={{resize: "none"}}
                        name='bio'
                        placeholder="A short descrption about yourself"
                        />
                    </Form.Item>
                </div>
            </div>

            <div className='container flex flex-wrap justify-between'>
                <div className='w-full md:w-1/2 px-4 md:px-8'>
                    <Form.Item
                    name="speciality"
                    label="Speciality"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                        {
                        required: true,
                        message: 'Please select one speciality!',
                        }
                    ]}
                    >
                        <Select
                        placeholder="---Speciality---"
                        allowClear
                        >
                            <Option value="Adventure & Nature"> Adventure & Nature</Option>
                            <Option value="Cultural & Historical">Cultural & Historical </Option>
                            <Option value="City & Lifestyle">City & Lifestyle</Option>
                            <Option value="Outdoor Activities">Outdoor Activities</Option>
                            <Option value="Others"> Others </Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='w-full md:w-1/2 px-4 md:px-8'>
                    <Form.Item
                    name="experience"
                    label="Experience (in years)"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                        {
                        required: true,
                        message: 'Please select your experince',
                        }
                    ]}
                    >
                        <Select
                        placeholder="---Experience---"
                        allowClear
                        >
                            <Option value="0-1"> 0-1</Option>
                            <Option value="2-3"> 2-3 </Option>
                            <Option value="3-4">3-4</Option>
                            <Option value="5+">5+</Option>
                        </Select>
                    </Form.Item>
                </div>
            </div>

            <div className='container flex flex-wrap justify-between'>
                <div className='w-full md:w-1/2 px-4 md:px-8'>
                    <Form.Item
                        name="languages"
                        label="Select Languages"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[
                        {
                            required: true,
                            message: 'Please select at least one language!',
                        },
                        ]}
                    >
                        <Checkbox.Group
                        options={languages}
                        onChange={(checkedValues) => setSelectedLanguages(checkedValues)}
                        />
                    </Form.Item>

                </div>
                <div className='w-full md:w-1/2 px-4 md:px-8'>
                    <Form.Item
                    name="pricing"
                    label="Pricing Hourly (in NRs.)"
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

export default ProfessionalInfo
