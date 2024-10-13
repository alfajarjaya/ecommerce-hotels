import React from 'react';
import { Carousel } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default class ServiceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPhone: false,
        };
    }

    componentDidMount() {
        Aos.init({
            once: false,
            mirror: true
        });
        Aos.refresh();

        const matchMediaPhone = window.matchMedia("(max-width: 768px)");
        this.setState({ isPhone: matchMediaPhone.matches });

        matchMediaPhone.addEventListener('change', (e) => {
            this.setState({ isPhone: e.matches });
        });
    }

    render() {
        const { isPhone } = this.state;

        const imageData = [
            {
                url: "https://repository.alfajjar.my.id/ecommerce-hotel/wlc1.jpg",
                alt: "https://repository.alfajjar.my.id/ecommerce-hotel/wlc1.jpg",
                title: 'Image 1',
                description: 'Description 1'
            },
            {
                url: "https://repository.alfajjar.my.id/ecommerce-hotel/wlc2.jpg",
                alt: "https://repository.alfajjar.my.id/ecommerce-hotel/wlc2.jpg",
                title: 'Image 2',
                description: 'Description 2'
            },
            {
                url: "https://repository.alfajjar.my.id/ecommerce-hotel/wlc3.jpg",
                alt: "https://repository.alfajjar.my.id/ecommerce-hotel/wlc3.jpg",
                title: 'Image 3',
                description: 'Description 3'
            }
        ]

        return (
            <>
                <div className='service-section' style={{ backgroundColor: "#F4F1ED" }}>
                    <div className='container py-5' id='intro'>
                        <div className="row">
                            <div className={isPhone ? "d-flex justify-content-center align-items-center flex-column w-100" : "d-flex justify-content-between flex-row align-items-center"}>
                                <div className="service-item w-100">
                                    <h1 style={isPhone ? { marginBottom: 10 } : { width: "80%" }} data-aos='fade-up' data-aos-delay='100'>Welcome to your luxurious home away from home.</h1>
                                    <p style={isPhone ? { marginTop: 10 } : { width: "80%" }} data-aos='fade-up' data-aos-delay='300'>Step into a haven of tranquility and immerse yourself in the epitome of luxury at The Ocean Grande...</p>
                                </div>
                                <div className={isPhone ? "service-item w-100" : "service-item w-50"}>
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
