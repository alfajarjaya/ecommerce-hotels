import React from 'react';
import EastIcon from '@mui/icons-material/East';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default class AccommodationsComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false, // Default state untuk SSR
        };
    }

    componentDidMount() {
        // Hanya di client-side, akses window.matchMedia
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
        const dataAccommodations = [
            {
                img: "https://repository.alfajjar.my.id/ecommerce-hotel/acc1.png",
                sp: '| 2 adults',
                title: 'Accommodation 1',
                price: 'from Rp. 1000.000',
                link: "#"
            },
            {
                img: "https://repository.alfajjar.my.id/ecommerce-hotel/acc2.png",
                sp: '| 2 adults & 2 child below 7',
                title: 'Accommodation 2',
                price: 'from Rp. 1000.000',
                link: "#"
            },
            {
                img: "https://repository.alfajjar.my.id/ecommerce-hotel/acc3.png",
                sp: '| 2 adults & 2 - 3 children',
                title: 'Accommodation 3',
                price: 'from Rp. 1000.000',
                link: "#"
            }
        ];
        return (
            <>
                <div style={{ backgroundColor: "#EFEBE5" }}>
                    <div className='container py-5 accommodations'>
                        <h1 className='text-center' style={{ marginTop: 60, marginBottom: 60 }} data-aos='fade-up'>Residences</h1>
                        <div className=" d-flex justify-content-center align-items-center ">
                            <div className='row w-100'>
                                {dataAccommodations.map((items, index) => (
                                    <div key={index} className={`col ${isMobile ? "w-100 my-2" : "col-sm-4 "}`} data-aos='fade-up' data-aos-duration={index * 1000}>
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
