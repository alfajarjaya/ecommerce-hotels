const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../assets/img/Accommodations/', false, /\.(png|jpe?g|svg)$/));

const dataAccommodations = [
    {
        img: images[0],
        sp: '| 2 adults',
        title: 'Accommodation 1',
        price: 'from Rp. 1000.000',
        link: "#"
    },
    {
        img: images[1],
        sp: '| 2 adults & 2 child below 7 ',
        title: 'Accommodation 2',
        price: 'from Rp. 1000.000',
        link: "#"
    },
    {
        img: images[2],
        sp: '| 2 adults & 2 - 3 childern',
        title: 'Accommodation 3',
        price: 'from Rp. 1000.000',
        link: "#"
    }
]

export default dataAccommodations;