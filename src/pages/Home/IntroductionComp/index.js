import React from 'react';
import imageData from './img';

import { Carousel } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

const matchMediaPhone = window.matchMedia("(max-width: 768px)");

export default class ServiceComponent extends React.Component {
    componentDidMount() {
        Aos.init({
            once: false,
            mirror: true
        });
        Aos.refresh();
    }

    render() {
        return (
            <>
                <div className='service-section' style={{ backgroundColor: "#F4F1ED" }}>
                    <div className='container py-5' id='intro'>
                        <div className="row">
                            <div className={matchMediaPhone.matches ? "d-flex justify-content-center align-items-center flex-column w-100" : "d-flex justify-content-between flex-row align-items-center"}>
                                <div className="service-item w-100">
                                    <h1 style={matchMediaPhone.matches ? { marginBottom: 10 } : { width: "80%" }} data-aos='fade-up' data-aos-delay='100'>Welcome to your luxurious home away from home.</h1>
                                    <p style={matchMediaPhone.matches ? { marginTop: 10 } : { width: "80%" }} data-aos='fade-up' data-aos-delay='300'>Step into a haven of tranquility and immerse yourself in the epitome of luxury at The Ocean Grande, your luxurious home away from home. Experience the finest hospitality as you unwind in our lavishly appointed accommodations, savor culinary delights crafted by our world-class chefs, and indulge in a myriad of rejuvenating spa treatments. Let the gentle caress of ocean breezes and the mesmerizing sounds of waves lull you into a state of pure bliss. Discover a sanctuary where every moment is designed to surpass your expectations, creating memories that will linger long after your departure.</p>
                                </div>
                                <div className={matchMediaPhone.matches ? "service-item w-100" : "service-item w-50"}>
                                    <div className='d-flex justify-content-center'>
                                        <Carousel data-bs-theme="light" className='content-carousal-img'>
                                            {imageData.map((img, index) => (
                                                <Carousel.Item key={index} interval="3000" >
                                                    <img
                                                        className="carousel-img"
                                                        src={img.url}
                                                        alt={img.alt}
                                                    />
                                                    <Carousel.Caption>
                                                        <h5>{img.title}</h5>
                                                        <p>{img.description}</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
