import React from 'react'
import { Link } from 'react-router-dom'
import payment from '../images/payment.jpg'

const Footer = () => {
  return (
    <>
        <div className="container-fluid bg-dark text-light">
            <div className="row">
                <div className="col-md-4 text-center my-2"><i className="bi bi-truck fs-1"></i> <br/><b>FREE SHIPPING</b><br />Free shipping on all order</div>
                <div className="col-md-4 text-center my-2"><i className="bi bi-cash-coin fs-1"></i><br /> <b>MONEY GAURNTEE</b><br />30 Days money back gaurntee</div>
                <div className="col-md-4 text-center my-2"><i className="bi bi-headset fs-1"></i><br /><b>ONLINE SUPPORT</b><br />We support online 27/7 on day</div>
            </div>
        </div>

        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-md-3 my-3">
                <h1>Tommy Cart</h1>
                <address>
                    55 Gallaxy Colony
                    <br />
                    226 Street
                </address>

                
                    <b>Phone:</b> (+91-999-999-999-9)
             
                <br />
                    <b>Email:</b> ecartindia@gmail.com
               
               <br />

               <i className="bi bi-facebook mx-1"></i>
               <i className="bi bi-twitter mx-1"></i>
               <i className="bi bi-instagram mx-1"></i>
               <i className="bi bi-pinterest mx-1"></i>
                </div>
                <div className="col-md-2 my-3"><h6>INFORMATION</h6></div>
                <div className="col-md-2 my-3"><h6>QUICK SHOP</h6></div>
                <div className="col-md-2 my-3">
                <h6>CUSTOMER SERVICES</h6>
                <Link className='text-dark' to="/">Help & FAQs</Link><br />
                <Link className='text-dark' to="/">Returns Policy</Link><br />
                <Link className='text-dark' to="/">Terms & Conditions</Link><br />
                <Link className='text-dark' to="/">Privacy Policy</Link><br />
                <Link className='text-dark' to="/">Support Center</Link><br />
                </div>
                <div className="col-md-3 my-3">
                <h6>NEWSLETTER</h6>
                <span>
                Enter your email to receive daily news and get 20% off coupon for all items.
                </span>
                <input type="email" name="" id="" className='form-control my-2' placeholder='Enter Your Email'/>
                <button className='btn btn-primary'>SUBSCRIBE</button>
                </div>
                
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 my-3">&copy; 2023 E-Cart. All Rights Reserved.</div>
                        <div className="col-md-6 d-flex justify-content-md-end  my-3"><img src={payment} height="30" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer