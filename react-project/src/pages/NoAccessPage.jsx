import { Button } from 'antd'
import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import ErrorPage from '../components/ErrorPage';

const NoAccessPage = () => {
  return (
    <ErrorPage
        error="403"
        image="https://png.pngtree.com/png-clipart/20230825/original/pngtree-login-access-denied-vector-illustration-picture-image_8480029.png"
        message=" You tried to access the page you don't have prior authorization for."
        isAccessPage='true'
    />
  )
}

export default NoAccessPage
