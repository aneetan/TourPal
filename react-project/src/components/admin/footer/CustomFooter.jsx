import { Footer } from 'antd/es/layout/layout'
import React from 'react'

const CustomFooter = () => {
  return (
    <>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          TourPal ©{new Date().getFullYear()} 
        </Footer>
      
    </>
  )
}

export default CustomFooter
