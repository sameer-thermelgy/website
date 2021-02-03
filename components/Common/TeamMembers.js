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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                </div>

                {display ? <OwlCarousel 
                    className="home-team-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/team/team16.jpg" alt="team" />
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
                            <h3>John Smith</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/team/team17.jpg" alt="team" />
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
                            <h3>Evana Doe</h3>
                            <p>Web Developer</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/team/team18.jpg" alt="team" />
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
                            <h3>Bread Mc</h3>
                            <p>IT Consulting</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/team/team19.jpg" alt="team" />
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
                            <h3>Maria Fread</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/team/team16.jpg" alt="team" />
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
                            <h3>John Smith</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/team/team17.jpg" alt="team" />
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
                            <h3>Evana Doe</h3>
                            <p>Web Developer</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/team/team18.jpg" alt="team" />
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
                            <h3>Bread Mc</h3>
                            <p>IT Consulting</p>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="team-img">
                            <img src="/images/team/team19.jpg" alt="team" />
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
                            <h3>Maria Fread</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TeamMembers;