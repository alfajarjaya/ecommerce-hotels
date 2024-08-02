import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <div style={{ backgroundColor: '#EFEBE5' }}>
            <footer className="text-white py-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h5 className="text-uppercase">The Ocean Grande</h5>
                            <p>Stay in the loop and sign up for the Wardiere newsletter:</p>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-dark" type="button">
                                        <span className="sr-only">Subscribe</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h5 className="text-uppercase">Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="#home" className="text-white">Home</a></li>
                                <li><a href="#about" className="text-white">About</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h5 className="text-uppercase">Documentation</h5>
                            <ul className="list-unstyled">
                                <li><a href="#help" className="text-white">Help Centre</a></li>
                                <li><a href="#contact" className="text-white">Contact</a></li>
                                <li><a href="#faq" className="text-white">FAQ</a></li>
                                <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h5 className="text-uppercase">Social</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://facebook.com" className="text-white">Facebook</a></li>
                                <li><a href="https://instagram.com" className="text-white">Instagram</a></li>
                                <li><a href="https://x.com" className="text-white">X</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <p className="mb-0">© TheOceanGrande. All Rights Reserved xxxx</p>
                        <a href="#terms" className="text-white">Terms & Conditions</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;