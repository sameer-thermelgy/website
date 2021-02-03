import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>", 
        "<i class='flaticon-next-1'></i>"
    ],
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="main-banner-three">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <h1>Secure IT Solutions For A More Secure Environment</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                        <div className="slider-btn-wrap">
                                            <Link href="/contact-us">
                                                <a className="box-btn">Contact Us </a>
                                            </Link>

                                            <Link href="/about-us">
                                                <a className="box-btn border-btn">
                                                    Know More
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 pr-0 col-md-12">
                        {display ? <OwlCarousel 
                            className="banner-image-slider owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="banner-image banner-slider-bg-1"></div>
                            <div className="banner-image banner-slider-bg-2"></div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
			</div>
        </div>
    )
}

export default MainBanner;