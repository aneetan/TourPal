import React, { useState } from 'react'
import { Button, DatePicker , Form, Input, message, Rate } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { addReview } from '../../utils/user.utils';
import { showSuccess } from '../../utils/toastify.utils';

const { TextArea } = Input;

const AddReviewForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(3);
    const navigate = useNavigate();
    const {id} = useParams();

    const onFinish = async(values) => {
        setLoading(true);

        try{
            const formData = {
                ...values,
                guideId: id,
                user: localStorage.getItem('username')
            }
            await addReview(formData);
            form.resetFields();
            showSuccess("Review posted")
            navigate(`/guideProfile/${id}`)

        } catch(error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
        
    };
    return (
        <>
            <div className=' py-10 flex align-bottom justify-center bg-[#f9f5f1]'>
                <div className="w-full p-6 max-w-[350px] md:min-w-[400px] border-gray-500 bg-white shadow-2xl">
                    <h3 className="text-lg font-medium mb-4">Add a Review</h3>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark={false}
                    >
                        
                        <Form.Item
                        name="rating"
                        label="Rate"
                        rules={[{ required: true, message: 'Please enter your desired destination' }]}
                        >
                         <Rate onChange={setValue} value={value} />
                        </Form.Item>

                        <Form.Item
                        name="message"
                        label="Message"
                        rules={[{ required: false }]}
                        >
                        <TextArea
                            style={{resize:"none"}}
                            placeholder="Add your review message here..." 
                            rows={4}
                        />
                        </Form.Item>
                        
                        <Form.Item className="mb-0">
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={loading}
                            block
                            style={{backgroundColor:"#F15D30"}}
                            className="bg-amber-500 transiiton hover:opacity-90 hover:scale-[1.004]"
                        >
                            Add Review
                        </Button>
                        </Form.Item>
                    </Form>
                    </div>
                </div>
        
        </>
    )
}

export default AddReviewForm
