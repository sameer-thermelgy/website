import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="feature-area bg-color ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="contnet">
                            <div className="feature-tittle">
                                <span>Our USP</span>
                                <h2>We have also some differentiation that provided by us</h2>
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur, beatae quod eaque reprehenderit non ab quibusdam doloribus voluptatibus! Voluptatum aspernatur quasi id dolore doloremque quo vero</p> */}
                            </div>

                            <ul>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    Blend of technologies to solve acute problem of Energy efficiency & post COVID opening of normal operations
                                </li>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    Strong partners (Ideation/prototyping, Manufacturing, Installation & commissioning to Financing)
                                </li>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    Midst of IITM vibrant eco-system to innovate next technologies on sustained basis to stay ahead
                                </li>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    High performing team with blend of Expertise and Energy
                                </li>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    Cost effectiveness
                                </li>
                            </ul>

                            {/* <Link> */}
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=+917338883142&text=Hi, I would like to contact you." className="box-btn">Lets Talk!</a>
                            {/* </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="feature-img">
                            <img src="/images/feature-img.png" alt="feature" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;