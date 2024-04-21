import React from 'react'
import ErrorCSS from './error.module.css'

const Error404 = () => {
  return (
    <div className={ErrorCSS.error_div}>
      <h1 className={ErrorCSS.error_heading}>Error 404 Page not found</h1>
    </div>
  )
}

export default Error404