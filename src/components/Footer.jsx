import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{ height: '250px' }} className='text-white bg-primary pt-5 mt-5' id='foot'>
    <div className="d-flex justify-content-between">
      <div style={{ width: '400px' }} className="intro">
        <h5 style={{fontFamily:"Afacad Flux"}}><i className='fa-solid fa-utensils me-2'></i>RecipieBook</h5>
        <p>Code liscenced, docs CC BY 3.0.</p>
        <p>Currently v5.3.2.</p>
      </div>
      <div className="">
        <h5 style={{fontFamily:"Afacad Flux"}}>Links</h5>
        <Link to={'/'} style={{ textDecoration: 'none', color:'white' }}>Home Page</Link> <br />
        <Link to={'/view'} style={{ textDecoration: 'none', color:'white' }}>View Page</Link> <br />
      </div>
      <div className="">
        <h5 style={{fontFamily:"Afacad Flux"}}>Guides</h5>
        <a href="https://react.dev/" style={{ textDecoration: 'none', color:'white' }} target='_blank'>React</a> <br />
        <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color:'white' }} target='_blank'>React Bootstrap</a> <br />
        <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color:'white' }} target='_blank'>React Router</a>
      </div>
      <div className="">
        <h5 style={{fontFamily:"Afacad Flux"}}>Contact Us</h5>
        <div className='pt-1 d-flex'>
          <input placeholder='Enter your email here'  type="text" className='form-control rounded' />
          <button className='btn bg-white text-black ms-1'><i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className='d-flex gap-2 pt-1'>
          <a href="" style={{ textDecoration: 'none', color:'white' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'white' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'white' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'white' }} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'white' }} target='_blank'><i className='fa-brands fa-github'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'white' }} target='_blank'><i className='fa-solid fa-phone'></i></a>
        </div>
      </div>
    </div>
    <p className='text-center mt-3'>Copyright &copy:Recipiebook. Built with React .
    </p>
  </div>
  )
}

export default Footer