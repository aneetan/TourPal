import React, { useState } from 'react'
import { Button,Form,Input, Typography, Tooltip  } from "antd";
const { Text, Link } = Typography;

const Signup = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFormFocused, setIsFormFocused] = useState(false);

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return (
    <>
        <section className="overflow-x-hidden py-5 h-[100vh] absolute inset-0 bg-cover bg-center"
            style={{
            backgroundColor: '#FFFFFF',
            backgroundImage: 'url(https://res.klook.com/image/upload/q_85/c_fill,w_750/v1595073504/blog/dmida4bcnbnrejsq7lyw.jpg)', 
            zIndex: 2,
            backgroundBlendMode: 'multiply'
            }}
        >
            <div className="container mx-auto" style={{zIndex:5}}>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                        <div className="text-center">
                            <a
                            href="/#"
                            className="mx-auto inline-block max-w-[160px]"
                            >
                            Logo here
                            {/* <img
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                                alt="logo"
                            /> */}
                            </a>
                        </div>

                        <Form>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your name',
                                    }
                                ]}
                            >
                                <Input
                                style={{marginTop:"4rem",padding:"10px", outline: "none"}}
                                placeholder="Enter Your Name"
                                onFocus={(e) => e.target.style.border = "1px solid #f15d30"}
                                onBlur={(e) => e.target.style.border = "1px solid #E7E7E7"}
                                />
                            </Form.Item>

                            <Form.Item
                            name="email"
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
                                placeholder="Enter Email"
                                onFocus={(e) => e.target.style.border = "1px solid #f15d30"}
                                onBlur={(e) => e.target.style.border = "1px solid #E7E7E7"}
                                />
                            </Form.Item>

                            <Form.Item
                            name="phone"
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
                                placeholder="Enter number"
                                onFocus={(e) => e.target.style.border = "1px solid #f15d30"}
                                onBlur={(e) => e.target.style.border = "1px solid #E7E7E7"}
                                />
                            </Form.Item>

                            <Form.Item
                            name="password"
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
                            style={{
                                border: isFocused ? '1px solid #f15d30' : '1px solid #E7E7E7', 
                                borderRadius: '4px', 
                              }}
                            >

                            <Input.Password
                            style={{padding:"10px", outline:"none", border:"none"}}
                            placeholder="Enter password"
                            onFocus={() => setIsFocused(true)} 
                            onBlur={() => setIsFocused(false)}
                            />
                            </Form.Item>

                            <Form.Item
                            name="confirmPassword"
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
                            style={{
                                border: isFormFocused ? '1px solid #f15d30' : '1px solid #E7E7E7', 
                                borderRadius: '4px', 
                              }}
                            >
                            <Input.Password
                            style={{padding:"10px", outline:"none", border:"none"}}
                            placeholder="Confirm password"
                            onFocus={() => setIsFormFocused(true)} 
                            onBlur={() => setIsFormFocused(false)}
                            />
                            </Form.Item>

                             

                            <div className="float-left mb-3 items-start">
                                    <div className="text-sm">
                                        <label for="terms" className="font-light text-[0.8rem] float-left text-gray-600">
                                            By proceeding, you agree to our
                                            <a class="font-medium text-primary-600 ml-1 hover:underline dark:text-primary-500" href="#">
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                            </div>


                            <div className="mb-3">
                             <Button type="primary"
                                htmlType="submit"
                                className="w-full hover:drop-shadow-md hover:scale-102 transition
                                cursor-pointer duration-300 ease-in-out font-bold"
                                style={{padding:"20px", fontSize:"18px", backgroundColor:"#FF8B1A"}}>
                                Register
                            </Button>
                            </div>
                        </Form>

                        <div className="flex justify-center">
                            <hr class="w-[30%] h-px mx-4 my-8 bg-gray-200 border-0 dark:bg-gray-400"/>
                            <span className="my-5"> Or </span>
                            <hr class="w-[30%] h-px mx-4 my-8 bg-gray-200 border-0 dark:bg-gray-400"/>
                        </div>
                        
                        <div className="-mx-2 mb-12 flex justify-between">
                            <div className="w-full px-2">
                            <a
                                href="/#"
                                className="flex h-10 items-center justify-center py-6 text-black border-1 inset-shadow-2xs
                                border-gray-300 text-semibold rounded-md hover:drop-shadow-md hover:scale-102
                                transition cursor-pointer duration-300 ease-in-out"
                            >
                                <img className="w-10 h-10" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="#"/>
                                Login with Google
                            </a>
                            </div>
                        </div>

                        <p className="text-base text-body-color">
                            <span className="pr-2">Already Registered?</span>
                            <Link href="/login"  target="_blank" style={{textDecoration:"underline", fontFamily:"Poppins", fontSize:"16px"}}>
                            Login
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



export default Signup
