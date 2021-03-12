import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 30,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        575: {
            items: 2,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
};

const TeamMembers = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="home-team-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Team Members</span>
                    <h2>People Who are Behind the Achievements</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p> */}
                </div>

                {display ? <OwlCarousel
                    className="home-team-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/members/satya.jpg" alt="team" />
                            <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/in/satyaseshadri/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
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
                            </ul>
                        </div>

                        <div className="content text-center">
                            <h3>Satyanarayan Seshadri</h3>
                            <p>CTO</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/members/jayesh.jpg" alt="team" />
                            <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/in/jayeshprofile/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
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
                            </ul>
                        </div>

                        <div className="content text-center">
                            <h3>Jayesh Jain</h3>
                            <p>Managing Director</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/members/sridharan.jpg" alt="team" />
                            <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/in/sridharan-murugadass-90bb789b" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
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
                            </ul>
                        </div>

                        <div className="content text-center">
                            <h3>Sridharan Murugadass</h3>
                            <p>Cloud Solution Architect</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/members/person.png" alt="team" />
                            <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/in/shri-krishna-776b91141/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
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
                            </ul>
                        </div>

                        <div className="content text-center">
                            <h3>Sri Krishna</h3>
                            <p>Senior Backend Developer</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/members/sameer.jpg" alt="team" />
                            <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/in/sameersanjeevi/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
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
                            </ul>
                        </div>

                        <div className="content text-center">
                            <h3>Sameer S</h3>
                            <p>Product Manager</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/members/female.jpg" alt="team" />
                            <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/in/princymariayesu/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
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
                            </ul>
                        </div>

                        <div className="content text-center">
                            <h3>Princy M</h3>
                            <p>Frontend Developer</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/members/asish.jpg" alt="team" />
                            <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/in/asish-johney-george-8115231a0/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
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
                            </ul>
                        </div>

                        <div className="content text-center">
                            <h3>Asish Johney George</h3>
                            <p>Research Engineer IOT</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/members/person.png" alt="team" />
                            <ul className="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
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
                            </ul>
                        </div>

                        <div className="content text-center">
                            <h3>Nikhil Krishna</h3>
                            <p>Research Engineer IOT</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/members/abishek.jpg" alt="team" />
                            <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/in/abishek-arjunan-b19311a3/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
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
                            </ul>
                        </div>

                        <div className="content text-center">
                            <h3>Abishek A</h3>
                            <p>Research Engineer IOT</p>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TeamMembers;