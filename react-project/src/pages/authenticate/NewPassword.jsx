import { Button, Card, Checkbox, Form, Input, Select } from 'antd'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import { updateUser } from '../../utils/user.utils';
import { showSuccess } from '../../utils/toastify.utils';
import useFetch from '../../hooks/useFetch';

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const NewPassword = () => {
  const navigate = useNavigate();
  let {id} = useParams();
  const {data, loading, error} = useFetch(`http://localhost:3000/users/${id}`);

    const onFinish = async( values ) => {
        const {password} = values;
        const updatedData = {
            ...data,
            password: password
        }
        updateUser(id, updatedData). 
        then(()=> {
            showSuccess("Password changed successfully")
            navigate(`/login`)
        })

    }

  return (
    <section className="overflow-x-hidden py-5 h-[100vh] absolute inset-0 bg-cover bg-center"
    style={{
    backgroundColor: '#FFFFFF',
    backgroundImage: 'url(https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg?cs=srgb&dl=pexels-mathew-thomas-318779-906531.jpg&fm=jpg)', 
    zIndex: 2,
    backgroundBlendMode: 'multiply'
    }}
  >
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative my-[6%] mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
          <div class="mx-auto mb-6 sm:container">
                  <h2 class="text-dark mb-2 text-2xl font-semibold dark:text-white">
                      Change Password
                  </h2>
                  <p class="text-gray-500 text-sm font-normal">
                      Enter a new password below to change your password
                  </p>
          </div>
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
            
            <p className="text-base text-body-color dark:text-dark-6">
              <span className="pr-2"></span>
              <Link to="/login" style={{textDecoration:"underline", fontFamily:"Poppins", fontSize:"14px", color: "blue"}}>
                Back to Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>
       
    
  )
}

export default NewPassword