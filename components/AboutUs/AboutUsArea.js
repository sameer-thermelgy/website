import React from 'react';

const AboutUsArea = () => {
    return (
        <div className="home-company-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="company-content">
                            <div className="company-tittle">
                                <span>About Us</span>
                                <h2>Innovative It Helping Service All Over the World</h2>
                                <p>Thermelgy’s TMY (Trace, Monitor and Yield) framework is aimed to disrupt the way Energy, occupational safety & comfort and machine health is monitored and managed. The TMY leverages the technology built at the intersection of IoT, Systems Physics understanding, and Data Science. We aim to provide a user-friendly and cost effective solution to our client which saves on their monthly energy bill and provide predictive maintenance for their critical machines.</p>
                                <p>Thermelgy is promoted by the serial entrepreneur in the cleantech space.</p>
                                <p>The idea root lies from the leading technology institutions such as IIT Madras. Almost 50% of Energy in all its form in the world goes in to the Industrial Sector, out of which 65% is available as heat or Thermal energy and about 35% as Electrical Energy. There lies a need to understand the quantity and quality of these energies, where and how it’s being used, there by understanding efficiency of the process, machines and systems. We strives to provide market-leading intelligent solutions to help companies cut down on costs while saving the environment.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="company-img">
                            <img src="/images/about_us.jpg" alt="company" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsArea;