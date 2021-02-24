import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const WhyChooseUs = () => {
    return (
        <div className="choose-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Why Choose Us</span>
                    <h2>We Achieved People’s Trust by Our Great Services</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p> */}
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-img">
                            <img src="/images/choose-img.png" alt="choose" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="choose-content">
                            <div className="faq-accordion">
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Trace (with Relevance)
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                ✓ Proprietary IoT platform enabling
                                                sensing & measuring business
                                                critical information<br />
                                                ✓ 360° measurements (Internal &
                                                External)<br />
                                                ✓ Accurate, granular and Systematic
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Monitor (with Intelligence)
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                ✓ Proprietary IoT Wireless Sensor
                                                Network enabling secure data transfer
                                                in seconds<br />
                                                ✓ Blend of physics and data to frame<br />
                                                ✓ Digital Twin providing actionable
                                                insights
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Yield (with precision)
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                ✓ Self service auto scalable
                                                proprietary Artificial Intelligence
                                                (AI) Distributed Micro Services,
                                            Multi-Cloud Platform<br />
                                            ✓ Remote control<br />
                                            ✓ Energy savings/Productivity
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    {/* <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Best Quality Service
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem> */}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;