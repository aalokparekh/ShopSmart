
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './Style.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-section">
                <div className="row ">
                    <div className="col-md-3">
                        <h5>MY ACCOUNT</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/cart' >My Wishlist</NavLink></li>
                            <li><NavLink to='/cart'>My Orders</NavLink></li>
                            <li><NavLink to='/login'>Track Order</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>HELP & CONTACT</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to='/login'>Contact      </NavLink></li>
                            <li><NavLink to='/login'>Trade Enquiry</NavLink></li>
                            <li><NavLink to='/login'>FAQ          </NavLink></li>
                      <li><NavLink to='/login'> Know Your True Size</NavLink></li>
                          <li><NavLink to='/login'>Return/Exchange</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>ABOUT CHUMBAK</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to='/home'>Company</NavLink></li>
                            <li><NavLink to='/products'>Our Faces</NavLink></li>
                            <li><NavLink to='/products'>Science Of Comfort</NavLink></li>
                            <li><NavLink to='/products'>Haps Stories</NavLink></li>
                            <li><NavLink to='/products'>Stores Near Me</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>LEGAL</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to='/login'>Terms & Conditions</NavLink></li>
                            <li><NavLink to='/login'>Privacy Policy</NavLink></li>
                            <li><NavLink to='/login'>Payment Methods</NavLink></li>
                            <li><NavLink to='/login'>Shipping & Return Policy</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container footer-section">
                <div className="row text-center">
                    <div className="col-12">
                        <h3>FOLLOW US</h3>
                        <div className="d-flex justify-content-center">
                            <NavLink className="mx-2" >
                                <img src="https://happenstance.com/themes/happenstance/images/facebook.webp" className="social-icon img-fluid rounded-circle" alt="Facebook" />
                            </NavLink>
                            <NavLink className="mx-2">
                                <img src="https://happenstance.com/themes/happenstance/images/instagram.webp" className="social-icon img-fluid rounded-circle" alt="Instagram" />
                            </NavLink>
                            <NavLink className="mx-2">
                                <img src="https://happenstance.com/themes/happenstance/images/pinterst.webp" className="social-icon img-fluid rounded-circle" alt="Pinterest" />
                            </NavLink>
                            <NavLink className="mx-2">
                                <img src="https://happenstance.com/themes/happenstance/images/youtube.webp" className="social-icon img-fluid rounded-circle" alt="YouTube" />
                            </NavLink>
                            <NavLink  className="mx-2">
                                <img src="https://happenstance.com/themes/happenstance/images/twitter.webp" className="social-icon img-fluid rounded-circle" alt="Twitter" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center footer-section">
                <div className="row">
                    <div className="col-12">
                        <span>&copy; Aalok Parekh</span>
                    </div>
                    <div className="col-12 mt-2">
                        <h6>Powered By: <strong>Aalok</strong></h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

