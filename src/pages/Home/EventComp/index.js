import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default class EventComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false, // Default state untuk SSR
        };
    }

    componentDidMount() {
        // Akses window.matchMedia hanya di client-side
        if (typeof window !== 'undefined') {
            const matchMediaPhone = window.matchMedia("(max-width: 768px)");
            this.setState({ isMobile: matchMediaPhone.matches });

            matchMediaPhone.addEventListener('change', (e) => {
                this.setState({ isMobile: e.matches });
            });
        }

        Aos.init({
            once: false,
            mirror: true
        });
        Aos.refresh();
    }

    render() {
        const { isMobile } = this.state; // Ambil state isMobile
        const dataEvent = [
            {
                img: "https://repository.alfajjar.my.id/ecommerce-hotel/acc1.png",
                title: "Early Bird Discount",
                details: "Manfaatkan penawaran awal eksklusif ini dan hemat hingga 25%"
            },
            {
                img: "https://repository.alfajjar.my.id/ecommerce-hotel/acc2.png",
                title: "Membership Card",
                details: "Nikmati berbagai manfaat eksklusif, termasuk akses ke fasilitas dan layanan terbaik kami."
            },
            {
                img: "https://repository.alfajjar.my.id/ecommerce-hotel/acc3.png",
                title: "Book 3 Nights, Get 1 Night Free",
                details: "Kesempatan yang sempurna untuk menikmati liburan yang lebih lama dengan harga yang lebih hemat."
            }

        ]

        return (
            <>
                <div style={{ backgroundColor: "#EFEBE5" }}>
                    <div className='container py-5 accommodations'>
                        <h1 className='text-center' style={{ marginTop: 60, marginBottom: 60 }} data-aos='fade-up'>Promos and Offers</h1>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className='row w-100'>
                                {dataEvent.map((items, index) => (
                                    <div
                                        key={index}
                                        className={`col-sm-4 ${isMobile ? "w-100 my-2" : "col-sm-4"}`}
                                        data-aos='fade-up'
                                        data-aos-duration={index * 900}
                                    >
                                        <div className="borders rounded-3 hover">
                                            <img
                                                src={items.img}
                                                alt={items.title}
                                                className="img-fluid rounded-2 custom-cursor"
                                                style={{ width: '100%', height: 'auto' }}
                                            />
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
