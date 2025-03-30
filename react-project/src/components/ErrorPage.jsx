import { Button } from 'antd'
import React from 'react'
import { NavLink, useNavigate } from 'react-router'

const ErrorPage = ({error, message, image, isAccessPage}) => {
    const navigate = useNavigate();
    const handleGoToHome = () => {
        navigate('/')
    }

    const handleLogin = () => {
        navigate('/login')
    }
  return (
    <div className='w-[100vw]'>
        <section className="relative z-10 bg-primary py-12">
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-[100vw] py-12 px-4">
                    <div className="mx-auto max-w-[400px] text-center">
                    <h2
                        className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px]"
                        >
                        {error}
                    </h2>
                    <img 
                    className=' px-22 w-100'
                    src={image}/>
                    {!isAccessPage?(
                        <h4
                        className="mb-3 text-[22px] font-semibold leading-tight text-black"
                        >
                            Page Not Found
                        </h4>
                    ):null}
                    
                    <p className="mb-8 text-lg text-black">
                        {message}
                    </p>
                    <Button className='mx-4' type='primary' onClick={handleGoToHome} size='large'> Go to Home </Button>
                    {isAccessPage? (
                        <Button type='default' onClick={handleLogin} size='large'> Login </Button>
                    ): (null)}
                    </div>
                </div>
            </div>
        </div>
        </section>
      
    </div>
  )
}

export default ErrorPage
