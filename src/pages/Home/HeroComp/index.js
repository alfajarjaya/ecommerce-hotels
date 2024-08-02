import React from 'react';
import { Button } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default class HeroComponent extends React.Component {
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
                <div className="d-flex justify-content-center align-items-center min-vh-100 text-white img-hero">
                    <div className="title-hero text-center">
                        <h1 className='mb-2' data-aos="fade-up" data-aos-delay='0'>WELCOME TO</h1>
                        <h1 style={{ fontSize: 100 }} className='my-3' data-aos='fade-up' data-aos-delay='300'>The Ocean Grande.</h1>
                        <h1 style={{ fontStyle: 'italic' }} data-aos='fade-up' data-aos-delay='500'>Opulent Seaside Resort & Hotel</h1>
                        <Button variant='light' className='my-5 py-2 px-5' onClick={() => document.getElementById("intro").scrollIntoView({ behavior: 'smooth' })} data-aos='fade-up' data-aos-delay='700'>
                            Learn More
                        </Button>
                    </div>
                </div>
            </>
        )
    }
}