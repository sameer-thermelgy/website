import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bxs-envelope'></i>
                            </div>
                            <div className="content">
                                <h3>Mail</h3>
                                <p>info@thermelgy.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bx-location-plus'></i>
                            </div>
                            <div className="content">
                                <h3>Address</h3>
                                <p>L-14, Phase II, First floor, Dr. VSI Estate, Near SRP Tools Chennai - 600041 Thiruvanmiyur, Tamilnadu , India</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="content">
                                <h3>Phone</h3>
                                <p>+91-7338883142</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;