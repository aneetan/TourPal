import React from 'react'
import Logo from '../../assets/images/logo.png'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router'
import useFetch from '../../hooks/useFetch'
import { authenticateUser, findUserByEmail } from '../../utils/user.utils'
import { showError } from '../../utils/toastify.utils'

const ForgotPw = () => {
    const navigate = useNavigate();
    const onFinish = async(values) => {
        const {email} = values;
        const userData = await findUserByEmail(email);

        if(userData){
            localStorage.setItem("userId", userData.id)
        }else {
            showError("Email not found")
        }

        navigate(`/otp/${userData.id}`)
    }
  return (
    <>
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
            <div className="mx-auto mb-6 sm:container">
                    <h2 className="text-dark mb-2 text-2xl font-semibold dark:text-white">
                        Forgot Password?
                    </h2>
                    <p className="text-gray-500 text-sm font-normal">
                        Please enter the email address you'd like your password reset information 
                        sent to 
                    </p>
            </div>
              <Form
                onFinish={onFinish}
                layout="vertical"
                className="max-w-2xl my-4 mx-auto"
              >
                <Form.Item
                  name="email"
                  label="Email"
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
                    size="large"
                    placeholder="Enter Email"
                  />
                </Form.Item>

                <div className="mb-3">
                    <Button type="primary" htmlType="submit"
                    className="w-full hover:drop-shadow-md hover:scale-102 transition
                    cursor-pointer duration-300 ease-in-out font-bold"
                    style={{padding:"20px", fontSize:"18px", backgroundColor:"#FF8B1A"}}>
                    Continue
                    </Button>
                </div>

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
    </>
  )
}

export default ForgotPw
