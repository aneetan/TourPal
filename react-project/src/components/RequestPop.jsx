import React from 'react'
import { Button, Popover, Form, Input, Select, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const RequestPop = () => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const onFinish = (values) => {
        setLoading(true);
        
        // Success Message
        setTimeout(() => {
            console.log('Request submitted:', values);
            message.success('Your request has been sent successfully!');
            form.resetFields();
            setOpen(false);
            setLoading(false);
        }, 1000);
    };

    const content = (
        <div className="w-full max-w-[350px] md:min-w-[400px]">
          <h3 className="text-lg font-medium mb-4">Send a Custom Request</h3>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Your name" />
            </Form.Item>
            
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input placeholder="Your email address" />
            </Form.Item>
            
            <Form.Item
              name="destination"
              label="Destination"
              rules={[{ required: true, message: 'Please enter your desired destination' }]}
            >
              <Input placeholder="Where do you want to go?" />
            </Form.Item>
            
            <Form.Item
              name="requestType"
              label="Request Type"
              rules={[{ required: true, message: 'Please select a request type' }]}
            >
              <Select placeholder="Select a request type">
                <Option value="guide">Local Guide Request</Option>
                <Option value="tour">Custom Tour</Option>
                <Option value="accommodation">Accommodation Help</Option>
                <Option value="transportation">Transportation Assistance</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please describe your request' }]}
            >
              <TextArea 
                placeholder="Describe what you're looking for..." 
                rows={4}
              />
            </Form.Item>
            
            <Form.Item className="mb-0">
              <Button 
                type="primary" 
                htmlType="submit" 
                loading={loading}
                block
                className="bg-blue-500 hover:bg-blue-600"
              >
                Send Request
              </Button>
            </Form.Item>
          </Form>
        </div>
      );

  return (
    <>
     <Popover
      content={content}
      title={null}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement="bottom"
      overlayClassName="request-popover-overlay"
      arrow={false}
    >
      <Button 
        type="primary" 
        icon={<SendOutlined />}
        className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2"
        size="large"
      >
        Send Request
      </Button>
    </Popover>
      
    </>
  )
}

export default RequestPop
