import React from 'react';

const TopHeaderThree = () => {
    return (
        <header className="header-area header-2 three">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-7 text-left">
                        <div className="header-content-right">
                            <ul className="header-contact">
                                <li>
                                    <a href="tel:+1123456789">
                                        <i className="bx bxs-phone-call"></i> +91-7338883142
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@thermelgy.com">
                                        <i className="bx bxs-envelope"></i> info@thermelgy.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-5 text-right">
                        <div className="header-content-right">
                            <ul className="header-social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="bx bxs-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="bx bxl-google-plus"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopHeaderThree;