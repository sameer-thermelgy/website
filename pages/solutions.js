import React from 'react';
import Navbar from '../components/_App/Navbar';
import TopHeader from '../components/_App/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const Solutions = () => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="Solutions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Solutions" 
            /> 

            <div className="home-service-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Smart Services</span>
                        <h2>Provide All Kind of Tech Solutions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-service">
                                <div className="service-img">
                                    <img src="/images/services/service1.png" alt="service" />
                                </div>

                                <div className="service-content">
                                    <h3>Visual Design</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
                                    
                                    <Link href="/solutions-details">
                                        <a className="line-bnt">
                                            Read More
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-service">
                                <div className="service-img">
                                    <img src="/images/services/service2.png" alt="service" />
                                </div>

                                <div className="service-content">
                                    <h3>Development</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
                                
                                    <Link href="/solutions-details">
                                        <a className="line-bnt">
                                            Read More
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-service">
                                <div className="service-img">
                                    <img src="/images/services/service3.png" alt="service" />
                                </div>

                                <div className="service-content">
                                    <h3>QA Testing</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>

                                    <Link href="/solutions-details">
                                        <a className="line-bnt">
                                            Read More
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-service">
                                <div className="service-img">
                                    <img src="/images/services/service4.png" alt="service" />
                                </div>

                                <div className="service-content">
                                    <h3>IT Management</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
                                
                                    <Link href="/solutions-details">
                                        <a className="line-bnt">
                                            Read More
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-service">
                                <div className="service-img">
                                    <img src="/images/services/service5.png" alt="service" />
                                </div>

                                <div className="service-content">
                                    <h3> Cyber Security</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>

                                    <Link href="/solutions-details">
                                        <a className="line-bnt">
                                            Read More
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-service">
                                <div className="service-img">
                                    <img src="/images/services/service6.png" alt="service" />
                                </div>

                                <div className="service-content">
                                    <h3>Wireless Connectivity</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>

                                    <Link href="/solutions-details">
                                        <a className="line-bnt">
                                            Read More
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link page-links" href="#">
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <Footer />
        </React.Fragment>
    )
}

export default Solutions;