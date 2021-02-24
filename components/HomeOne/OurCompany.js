import React from 'react';
import Link from 'next/link';

const OurCompany = () => {
    return (
        <div className="home-company-area bg-color">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="company-content">
                            <div className="company-tittle">
                                <span>Our Company</span>
                                <h2>Innovative It Helping Service All Over the World</h2>
                                <p>Thermelgy’s TMY (Trace, Monitor and Yield) framework is aimed to disrupt the way Energy, occupational safety & comfort and machine health is monitored and managed. The TMY leverages the technology built at the intersection of IoT, Systems Physics understanding, and Data Science. We aim to provide a user-friendly and cost effective solution to our client which saves on their monthly energy bill and provide predictive maintenance for their critical machines.</p>
                            </div>
                            <Link href="/about-us">
                                <a className="box-btn">
                                    Know More
                                </a>
                            </Link>
                        </div>
                    </div>

                    {/* <div className="col-lg-6 col-md-12">
                        <div className="company-img">
                            <img src="/images/company-img.jpg" alt="company" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default OurCompany;