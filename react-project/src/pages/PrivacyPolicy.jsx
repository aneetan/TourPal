import { Card } from 'antd'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
        <Card>
            <div className="bg-white z-10 text-center">
                    <h2 className="text-3xl mt-10 font-bold text-[#f15d30]">
                        Privacy Policy
                    </h2>
                    <p className='text-lg font-normal text-gray-700'> Your data is protected and respected. </p>
            </div>

            <Card variant='borderless' style={{margin: "0 6rem"}} >
                <h2 className="text-3xl mt-10 font-bold text-black">
                    General Information
                </h2>
                <p className='text-lg font-normal text-gray-700'> 
                All of our registered users information ( Name, Email, Phone Number and Address ) are secure to us.
                We are committed to taking care of all information and we are promised to our customers that we
                are never going to share their information with anyone.

                Also, We do not store any credit card information in server, all payments are processed by world
                leading payment gateway PayPal and Paddle and our site is secured by SSL encryption.
                </p>

                <h2 className="text-3xl mt-10 font-bold text-black">
                What rights you have over your data
                </h2>
                <p className='text-lg font-normal text-gray-700'> 
                If you have an account on this site, or have left comments, you can request to receive an exported
                file of the personal data we hold about you, including any data you have provided to us. You can
                also request that we erase any personal data we hold about you. This does not include any data
                we are obliged to keep for administrative, legal, or security purposes.
                </p>
            </Card>
        </Card>
    </>
  )
}

export default PrivacyPolicy
