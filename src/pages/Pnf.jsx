import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const Pnf = () => {
  return (
    <>
        <Header/>
        <div className="h-80 d-flex justify-content-center align-items-center" style={{paddingTop:"5px",height:"80vh",flexDirection:"column"}}>
          <img height={'350px'} width={'400px'} src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png" alt="" />
          <h1 className='text-4xl font-bold '>Page Not Found!</h1>
          <p className='text-xl font-semibold '>Click the Home to redirect to home page</p>
          <Link to={'/'} className='bg-success text-white rounded text-xl font-bold px-2 py-1' style={{textDecoration:"none"}}>Home</Link>
        </div>
    </>
  )
}

export default Pnf