import React from 'react';
import dataEvent from './data';
import '../../style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const matchMediaPhone = window.matchMedia("(max-width: 768px)");

export default class EventComp extends React.Component {
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
                <div style={{ backgroundColor: "#EFEBE5" }}>
                    <div className='container py-5 accommodations'>
                        <h1 className='text-center' style={{ marginTop: 60, marginBottom: 60 }} data-aos='fade-up'>Promos and Offers</h1>
                        <div className=" d-flex justify-content-center align-items-center ">
                            <div className='row w-100'>
                                {dataEvent.map((items, index) => (
                                    <div key={index} className={`col-sm-4 ${matchMediaPhone.matches ? "w-100 my-2" : "col-sm-4"}`} data-aos='fade-up' data-aos-duration={index * 900}>
                                        <div className="borders rounded-3 hover">
                                            <img src={items.img} alt={items.title} className="img-fluid rounded-2 custom-cursor" style={{ width: '100%', height: 'auto' }} />
                                            <div className="description-accommodations d-flex justify-content-center flex-column align-items-center">
                                                <div style={{ width: "80%" }}>
                                                    <h3 className='my-2'>{items.title}</h3>
                                                    <p>{items.details}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
