import dataAccommodations from './data';
import React from 'react';
import '../../style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EastIcon from '@mui/icons-material/East';
import Aos from 'aos';
import 'aos/dist/aos.css';

const matchMediaPhone = window.matchMedia("(max-width: 768px)");

export default class AccommodationsComp extends React.Component {
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
                        <h1 className='text-center' style={{ marginTop: 60, marginBottom: 60 }} data-aos='fade-up'>Residences</h1>
                        <div className=" d-flex justify-content-center align-items-center ">
                            <div className='row w-100'>
                                {dataAccommodations.map((items, index) => (
                                    <div key={index} className={`col ${matchMediaPhone.matches ? "w-100 my-2" : "col-sm-4 "}`} data-aos='fade-up' data-aos-duration={index * 1000}>
                                        <div className="borders rounded-3 hover">
                                            <img src={items.img} alt={items.title} className="img-fluid rounded-2 custom-cursor " style={{ width: '100%', height: 'auto' }} />
                                            <div className="description-accommodations d-flex justify-content-center flex-column align-items-center">
                                                <div style={{ width: "80%" }}>
                                                    <p>{items.sp}</p>
                                                    <h3>{items.title}</h3>
                                                    <p>{items.price}</p>
                                                </div>
                                                <a href={items.link}>Learn More <EastIcon /></a>
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
