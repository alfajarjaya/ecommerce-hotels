const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../assets/img/Accommodations/', false, /\.(png|jpe?g|svg)$/));

const dataEvent = [
    {
        img: images[0],
        title: "Early Bird Discount",
        details: "Manfaatkan penawaran awal eksklusif ini dan hemat hingga 25%"
    },
    {
        img: images[1],
        title: "Membership Card",
        details: "Nikmati berbagai manfaat eksklusif, termasuk akses ke fasilitas dan layanan terbaik kami."
    },
    {
        img: images[2],
        title: "Book 3 Nights, Get 1 Night Free",
        details: "Kesempatan yang sempurna untuk menikmati liburan yang lebih lama dengan harga yang lebih hemat."
    }
    
]

export default dataEvent;