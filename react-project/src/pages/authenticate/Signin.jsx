import { Button,Form,Input, Typography } from "antd";
import React, { useState } from "react";
const { Text, Link } = Typography;

const Signin = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <section className="overflow-x-hidden py-5 h-[100vh] absolute inset-0 bg-cover bg-center"
      style={{
      backgroundColor: '#FFFFFF',
      backgroundImage: 'url(https://res.klook.com/image/upload/q_85/c_fill,w_750/v1595073504/blog/dmida4bcnbnrejsq7lyw.jpg)', 
      zIndex: 2,
      backgroundBlendMode: 'multiply'
      }}
    >
      <div className="container mx-auto">
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
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input
                    style={{marginTop:"4rem",padding:"10px", outline: "none"}}
                    placeholder="Enter Email"
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

                <a
                href="/#"
                style={{textDecoration:"underline"}}
                className="mb-2 float-right inline-block text-[0.8rem]"
              >
                Forgot Password?
              </a>



                <div className="mb-3">
                <Button type="primary" htmlType="submit"
                        className="w-full hover:drop-shadow-md hover:scale-102 transition
                        cursor-pointer duration-300 ease-in-out font-bold"
                        style={{padding:"20px", fontSize:"18px", backgroundColor:"#FF8B1A"}}>
                        Submit
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
              
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-2">Not a member yet?</span>
                <Link href="/register"  target="_blank" style={{textDecoration:"underline", fontFamily:"Poppins", fontSize:"16px"}}>
                  SignUp 
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;

