import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <footer className="footer-area pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="content">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src="/images/logo2.png" alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod.
                                </p>
                                <div className="subscribe">
                                    <form className="newsletter-form">
                                        <input type="email" id="emails" className="form-control" placeholder="Your Email" name="EMAIL" required />
                                        <button className="box-btn" type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>

                                <ul className="social">
                                    <li>
                                        <a href="#" target="_blank"><i className='bx bxl-facebook' ></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i className='bx bxl-twitter' ></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i className='bx bxl-instagram' ></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/thermelgy/people" target="_blank"><i className='bx bxl-linkedin' ></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="content ml-15">
                                <h3>Our Service</h3>
                                <ul className="footer-list">
                                    <li>
                                        <Link href="#">
                                            <a>Visual Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>QA & Testing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>IT Management</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Cyber Security</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Wireless Connection</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <div className="content">
                                <h3>Quick Links</h3>
                                <ul className="footer-list">
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a href="#">Career</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privecy-policy">
                                            <a>Privacy & Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-condition">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Data Analysis</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="content contacts">
                                <h3 className="ml-40">Contact</h3>
                                <ul className="footer-list foot-social">
                                    <li>
                                        <a href="tel:+1975456789">
                                            <i className="bx bx-phone"></i> +91-7338883142
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@thermelgy.com">
                                            <i className="bx bxs-envelope"></i> info@thermelgy.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-map"></i> L-14, Phase II, First floor, Dr. VSI Estate, Near SRP Tools Chennai - 600041 Thiruvanmiyur, Tamilnadu , India
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copy-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="menu">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions">
                                            <a>Solutions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/case-studies">
                                            <a>Case Studies</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Clients</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-6">
                                <p className="right">
                                    Copyright @{currentYear} Thermelgy. All Rights Reserved by <a href="https://hibootstrap.com/" target="_blank">HiBootstrap.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;