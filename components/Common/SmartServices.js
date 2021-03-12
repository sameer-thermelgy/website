import React from 'react';
import Link from 'next/link';

const SmartServices = () => {
    return (
        <div className="home-service-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Smart Services</span>
                    <h2>Providing all kinds of Tech Solutions</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p> */}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <img src="/images/services/service1.png" alt="service" />
                            </div>

                            <div className="service-content">
                                <h3>End to End IoT solutions</h3>
                                <p>
                                    • Edge devices and Gateways enabling 360°
                                    measurements of machines and process<br />
                                    • IoT platform enabling
                                    sensing & measuring business critical
                                    information<br />
                                    • Thermal and Electrical Energy Monitoring<br />
                                    • HVAC Equipment Monitoring<br />
                                </p>
                                {/* <Link href="/solutions-details">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <img src="/images/services/service2.png" alt="service" />
                            </div>

                            <div className="service-content text-align-right">
                                <h3>IoT Cloud Platform</h3>
                                <p>
                                    • Proprietary IoT platform enabling
                                    sensing & measuring business critical
                                    information<br />
                                    • Plug and play services with real-time insights and alerts<br />
                                    • Micro-services framework enabling secure high speed data transfer<br />
                                    {/* • Ground up which makes it highly
                                extensible, fault-tolerant, fast and
                                efficient.<br /> */}
                                </p>
                                {/* <Link href="/solutions-details">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <img src="/images/services/service3.png" alt="service" />
                            </div>

                            <div className="service-content">
                                <h3>Network Operating Center(N.O.C.) - Digital Twin </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>

                                <Link href="/solutions-details">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <img src="/images/services/service4.png" alt="service" />
                            </div>

                            <div className="service-content">
                                <h3>Autonomous Controls</h3>
                                <p>Auto scalable Deep
                                learning powered Artificial
                                    Intelligence platform<br />
                                    • Actionable (physics compliant)
                                    and explainable (safe &
                                    reproducible) insights<br />
                                    • Dedicated Predictive
                                    Maintenance module </p>

                                {/* <Link href="/solutions-details">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-sm-6">
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
                    </div> */}

                    {/* <div className="col-lg-4 col-sm-6">
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SmartServices;