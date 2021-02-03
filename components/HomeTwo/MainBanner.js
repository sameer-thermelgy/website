import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown',
    items: 1,
    loop: true,
    autoplay: false,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>", 
        "<i class='flaticon-next-1'></i>"
    ]
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="slider-area-2">
            {display ? <OwlCarousel 
                className="home-slider owl-carousel owl-theme"
                {...options}
            >
                <div className="single-slider single-slider-bg-1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="slider-content one">
                                            <h1>Awesome App For Your Modern Lifestyle</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.</p>
                                            
                                            <div className="slider-btn text-center">
                                                <Link href="#">
                                                    <a className="box-btn">Let’s Talk!</a>
                                                </Link>
                                                <Link href="#">
                                                    <a className="box-btn border-btn">Know More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-slider single-slider-bg-2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="slider-content one">
                                            <h1>Digital Agency & Marketing</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.</p>
                                            
                                            <div className="slider-btn text-center">
                                                <Link href="#">
                                                    <a className="box-btn">Let’s Talk!</a>
                                                </Link>
                                                <Link href="#">
                                                    <a className="box-btn border-btn">Know More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-slider single-slider-bg-3">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="slider-content one">
                                            <h1>Make Real-Life Connections With IT</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.</p>
                                            
                                            <div className="slider-btn text-center">
                                                <Link href="#">
                                                    <a className="box-btn">Let’s Talk!</a>
                                                </Link>
                                                <Link href="#">
                                                    <a className="box-btn border-btn">Know More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </div>
    )
}

export default MainBanner;