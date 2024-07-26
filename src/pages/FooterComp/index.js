import React from "react";
import '../../style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Instagram, Facebook, X } from "@mui/icons-material"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const matchMediaPhone = window.matchMedia("(max-width: 768px)");

export default class FooterComp extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };

        return (
            <>
                <div className="footer d-flex justify-content-center align-items-center flex-column min-vh-100">
                    <div className="container">
                        <div className="row">
                            <h1 className="text-center text-white py-5 my-5">Apa Kata Mereka ?</h1>
                            <Slider {...settings}>
                                <div className="col-sm-4 w-100">
                                    <div className="d-flex flex-column gap-2 text-white p-4">
                                        <FormatQuoteIcon />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, facere.</p>
                                        <p>-</p>
                                        <h4>Author</h4>
                                    </div>
                                </div>
                                <div className="col-sm-4 w-100">
                                    <div className="d-flex flex-column gap-1 text-white p-4">
                                        <FormatQuoteIcon />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, facere.</p>
                                        <p>-</p>
                                        <h4>Author</h4>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className="container pt-5 mt-5">
                        <div className="row">
                            <h1 className="text-center text-white mb-4">Contact Us</h1>
                            <div className={`row ${matchMediaPhone.matches ? "flex-column" : "flex-row"} text-white`}>
                                <div className="col-sm-4 mb-4">
                                    <div className="p-3 border border-light rounded">
                                        <h4 className="mb-3">Address</h4>
                                        <p>Street Name, City, State, Zip Code</p>
                                        <a className="d-block text-white text-decoration-none mb-2" href="tel:+0987654321">telp : +0987654321</a>
                                        <a className="d-block text-white text-decoration-none" href="mailto:hello@coba.com">mail to : hello@coba.com</a>
                                    </div>
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <div className="p-3 border border-light rounded">
                                        <h4 className="mb-3">Office Hours</h4>
                                        <p>Monday - Friday <i>9:00 am to 16:00 noon</i></p>
                                        <p>Saturday <i>9:00 am to 12:00 noon</i></p>
                                    </div>
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <div className="p-3 border border-light rounded">
                                        <h4 className="mb-3">Get Social</h4>
                                        <div className="d-flex gap-2">
                                            <a href="https://instagram.com" className="text-white fs-4" aria-label="Instagram">
                                                <Instagram className="text-white" style={{ fontSize: 30 }} />
                                            </a>
                                            <a href="https://facebook.com" className="text-white fs-4" aria-label="Facebook">
                                                <Facebook className="text-white" style={{ fontSize: 30 }} />
                                            </a>
                                            <a href="https://twitter.com" className="text-white fs-4" aria-label="Twitter">
                                                <X className="text-white" style={{ fontSize: 30 }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
