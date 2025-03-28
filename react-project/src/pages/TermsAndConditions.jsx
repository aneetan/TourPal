import { Card } from 'antd'
import React from 'react'

const TermsAndConditions = () => {
  return (
    <>
        <Card>
            <div className="bg-white z-10 text-center my-6">
                    <h2 className="text-3xl mt-10 font-bold text-[#f15d30]">
                        Terms and Conditions
                    </h2>
                    <p className='text-sm mx-35 text-center font-normal text-gray-700'>
                        Welcome to TourPal . These Terms of
                        Service (“Terms”) govern your access to and use of our mobile application
                        and related services (the “Service”). By using the Service, you agree to
                        comply with these Terms. If you do not agree, please do not use the Service. </p>
            </div>

            <Card style={{margin: "0 6rem"}} >
                <h2 className="text-3xl mt-10 font-bold text-black">
                1. Acceptance of Terms
                </h2>
                <p className='text-lg font-normal text-gray-700'> 
                By accessing or using the Service, you confirm that you have read,
                understood, and agree to be bound by these Terms. If you do not agree
                to these Terms, you may not use our Service.
                </p>

                <h2 className="text-3xl mt-10 font-bold text-black">
                2. Eligibility
                </h2>
                <p className='text-lg font-normal text-gray-700'> 
                You must be at least 18 years old to use the Service. By using
                the Service, you represent and warrant that you have the legal capacity to enter into this agreement.
                </p>

                <h2 className="text-3xl mt-10 font-bold text-black">
                3. User Accounts
                </h2>
                <p className='text-lg font-normal text-gray-700'> 
                To access certain features, you may need to create an account.
                You agree to provide accurate, complete, and current information.
                You are responsible for maintaining the confidentiality of your login credentials
                and for all activities that occur under your account.
                </p>

                <h2 className="text-3xl mt-10 font-bold text-black">
                4. Contact Information
                </h2>
                <p className='text-lg font-normal text-gray-700'> 
                For any questions regarding these Terms, please contact us.
                </p>
            </Card>
        </Card>
    </>
  )
}

export default TermsAndConditions
