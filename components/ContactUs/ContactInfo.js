import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bx-time'></i>
                            </div>
                            <div className="content">
                                <h3>Opening Hours</h3>
                                <p>Sun - Thu : 10:00 AM - 06:00 PM</p>
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
                                <p>28/A Street, New York City, USA</p>
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
                                <p>+1 (321) 984 754</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;