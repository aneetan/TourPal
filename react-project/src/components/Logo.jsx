import React from 'react'
import Image from '../assets/images/logo.png'

const Logo = ({width}) => {
  return (
    <>
        <img width={width} src={Image} alt='logo'/>
    </>
  )
}

export default Logo
