import React from 'react';
import '../../style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import disertImg from '../../assets/img/disert.jpg';
import wcImg from '../../assets/img/wc.jpg';

const matchMediaPhone = window.matchMedia("(max-width: 768px)");

export default class DisertComponent extends React.Component {
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
                <div style={{ backgroundColor: "#F4F1ED" }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className={matchMediaPhone.matches ? "d-flex justify-content-center align-items-center flex-column w-100" : "d-flex justify-content-between flex-row align-items-center"}>
                                <div className="service-item w-100">
                                    <h1 style={matchMediaPhone.matches ? { marginBottom: 10 } : { width: "80%" }} data-aos='zoom' data-aos-delay='100'>Cita Rasa Laut yang Memukau.</h1>
                                    <p style={matchMediaPhone.matches ? { marginTop: 10 } : { width: "80%" }} data-aos='fade-up' data-aos-delay='400'>Rasakan kelezatan kuliner yang disajikan dengan ahli di restoran kami, memadukan cita rasa lokal dan internasional dengan bahan-bahan segar musiman. Nikmati hidangan lezat dalam suasana yang elegan dan romantis, ditemani pemandangan laut yang menakjubkan.</p>
                                </div>
                                <div className='d-flex justify-content-center flex-column align-items-center w-100' data-aos='fade-up' data-aos-delay='200'>
                                    <img src={disertImg} alt={disertImg} className='img-fluid rounded-2 custom-cursor hover' width={900} height={900} />
                                    <div className="borders my-2 d-flex justify-content-center text-center rounded-2">
                                        <p style={{ width: '90%' }}>Nikmati hidangan lezat yang disajikan dengan ahli di restoran tepi laut kami, The Ocean Breeze, sambil menikmati pemandangan laut yang menakjubkan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container py-5">
                        <div className="row">
                            <div className={matchMediaPhone.matches ? "d-flex justify-content-center align-items-center flex-column w-100" : "d-flex justify-content-between flex-row align-items-center"}>
                                <div className='d-flex justify-content-center flex-column align-items-center w-100' data-aos='fade-up' data-aos-delay='400'>
                                    <img src={wcImg} alt={wcImg} className='img-fluid rounded-2 custom-cursor hover' width={900} height={900} />
                                    <div className="borders my-2 d-flex justify-content-center text-center rounded-2 w-100">
                                        <p style={{ width: '90%' }}>Manjakan diri Anda dengan pengalaman yang tak terlupakan di The Ocean Grande.</p>
                                    </div>
                                </div>
                                <div className="service-item w-100">
                                    <h1 style={matchMediaPhone.matches ? { marginBottom: 10 } : { marginLeft: 50 }} data-aos='fade-up' data-aos-delay='100'>Surga Kebersihan.</h1>
                                    <p style={matchMediaPhone.matches ? { marginTop: 10 } : { marginLeft: 50 }} data-aos='fade-up' data-aos-delay='200'>Bersantailah pada bak mandi yang luas dan nikmati air hangat yang menenangkan otot dan pikiran Anda. Shower hujan yang menyegarkan akan membilas semua stres dan kelelahan hari itu. Manjakan diri Anda dengan produk perawatan diri berkualitas tinggi yang terbuat dari bahan-bahan alami.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}