import { Button,Form,Input, Typography } from "antd";
import React from "react";
const { Text, Link } = Typography;

const Signin = () => {
  return (
    <section className="bg-[#F15D30] overflow-x-hidden py-5 h-[100vh]">
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
                  <Input style={{marginTop:"4rem",padding:"10px"}} placeholder="Enter Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password style={{padding:"10px"}} placeholder="Enter password" />
                </Form.Item>



                <div className="mb-3">
                <Button type="primary" htmlType="submit" className="w-full"
                 style={{padding:"20px", fontWeight:"400", fontSize:"18px", backgroundColor:"#FF8B1A"}}> Submit</Button>
                </div>
              </Form>

              <p className=" mb-3 text-base text-secondary-color dark:text-dark-7">
                Or
              </p>
              <ul className="-mx-2 mb-12 flex justify-between">
                <li className="w-full px-2">
                  <a
                    href="/#"
                    className="flex h-10 items-center text-white text-semibold justify-evenly rounded-md bg-[#6A6A6A] hover:bg-opacity-90"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                        fill="white"
                      />
                    </svg>
                    Continue with Google
                  </a>
                </li>
              </ul>
              <a
                href="/#"
                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline"
              >
                Forget Password?
              </a>
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

