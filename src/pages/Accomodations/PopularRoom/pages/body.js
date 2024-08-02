import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import jpg from '../../../../assets/img/Accommodations/1.png';
import jpg_2 from '../../../../assets/img/Accommodations/2.png';
import '../style/main.css';
import LoadLibrary from '../../../../.load';
import controller from '../../.controller';

function Alert({ variant, children, onClose }) {
    return (
        <div className="custom-alert-container">
            <div className={`custom-alert alert-${variant} alert-dismissible fade show`} role="alert">
                {children}
                <Button variant='transparent' className="btn-close" onClick={onClose}></Button>
            </div>
        </div>
    );
}

function Recommendations() {
    const [data, setData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/data/populer-room').then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error('Network response was not ok');
        })
            .then(responseData => setData(responseData.populer_room))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleLearnMore = (id, img, title, name, price) => {
        const data = {
            id: id,
            title: title,
            name: name,
            price: price
        }

        setAlertContent(() => (
            <>
                <div className='container-card' id={id}>
                    <Card style={{ borderRadius: '20px', width: '100%' }}>
                        <Carousel data-bs-theme="light" className='content-carousal-img w-100'>
                            {img.slice(0, 2).map((image, index) => (
                                <Carousel.Item key={index} >
                                    <img
                                        className="carousel-img w-100"
                                        src={image}
                                        alt={img}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <Card.Body className='text-start'>
                            <Card.Text className="text-muted">
                                <p><b className='fw-bold fs-6'>Spesification :</b> {title}</p>
                            </Card.Text>
                            <Card.Title>
                                <h4><b className='fw-bold fs-6'>Room Name : </b>{name}</h4>
                            </Card.Title>
                            <Card.Text>
                                <p><b className='fw-bold fs-6'>Price From : $ </b>{price}</p>
                            </Card.Text>

                            <Button variant="primary" onClick={() => controller.handlePostPopulerRoom(data)}>Booking Now !</Button>
                        </Card.Body>
                    </Card>
                </div>

            </>
        ))
        setShowAlert(true);
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4 fw-bold">Rekomendasi Terbaik</h2>
            {showAlert && (
                <Alert variant="info" onClose={() => setShowAlert(false)}>
                    <pre>{alertContent}</pre>
                </Alert>
            )}
            <Row>
                {data.length > 0 ? (
                    data.map((room, index) => {
                        const roomId = room.id;
                        const roomImg = [jpg, jpg_2, jpg_2];
                        const roomTitle = room.title;
                        const roomName = room.name;
                        const roomPrice = room.price;
                        const roomDesc = room.desc;

                        return (
                            <Col md={4} className='my-3 bg-transparent' key={index} id={roomId}>
                                <Card style={{ borderRadius: '30px' }}>
                                    <Carousel data-bs-theme="light" className='content-carousal-img w-100'>
                                        {roomImg.map((img, index) => (
                                            <Carousel.Item key={index}>
                                                <img
                                                    className="carousel-img"
                                                    src={img}
                                                    alt={img}
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Text>
                                            <p>| {roomTitle}</p>
                                            <p className='d-none'>{roomId}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <Card.Title>{roomName}</Card.Title>
                                            <p>{roomPrice}</p>
                                            <p>{roomDesc}</p>
                                        </Card.Text>
                                        <Button style={{ backgroundColor: '#91713C' }} className='border-0' onClick={() => handleLearnMore(roomId, roomImg, roomTitle, roomName, roomPrice)}>
                                            Booking Now !
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                ) : (
                    <LoadLibrary.AccomodationsLoad />
                )}
            </Row>
        </Container >
    );
}

export default Recommendations;
