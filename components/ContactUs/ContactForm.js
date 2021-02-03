import React from 'react';

const ContactForm = () => {
    return (
        <div className="home-contact-area home-2-contact pb-100">
            <div className="container">
                <div className="section-title">
                    <span>Contact Us</span>
                    <h2>Let Us Know About Your Project Idea!</h2>
                    <p>It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="content">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" required placeholder="Your Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Your Phone" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Subject" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" rows="5" required placeholder="Your Message"></textarea>
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

                    <div className="col-lg-6 col-md-6">
                        <div className="contact-img contact-img-2">
                            <img src="/images/contact-img2.jpg" alt="contact" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;