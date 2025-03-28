import React from 'react'
import ErrorPage from '../components/ErrorPage'

const PageNotFound = () => {
  return (
    <ErrorPage
        error=""
        image="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
        message="The page you're looking for doesn't exist or has been moved."
        isAccessPage= {false}
    />
  )
}

export default PageNotFound
