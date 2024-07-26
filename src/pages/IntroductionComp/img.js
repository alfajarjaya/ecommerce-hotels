const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../assets/img/carausal/', false, /\.(png|jpe?g|svg)$/));

const imageData = [
    {
        url: images[0],
        alt: images[0],
        title: 'Image 1',
        description: 'Description 1'   
    },
    {
        url: images[1],
        alt: images[1],
        title: 'Image 2',
        description: 'Description 2'
    },
    {
        url: images[2],
        alt: images[2],
        title: 'Image 3',
        description: 'Description 3'
    }
]

export default imageData;