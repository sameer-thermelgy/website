import React from 'react';

const ContactForm = () => {
    return (
        <div className="home-contact-area home-2-contact pb-100">
            <div className="container">
                <div className="section-title">
                    <span>Contact Us</span>
                    <h2>Let Us Know About Your Project Idea!</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 mx-auto">
                        <div className="content">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn page-btn box-btn">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* <div className="col-lg-6 col-md-6">
                        <div className="contact-img">
                            <img src="/images/contact-img.png" alt="contact" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ContactForm;