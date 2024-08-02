import React from 'react';
import { Container, Button } from 'react-bootstrap';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FlagIcon from '@mui/icons-material/Flag';
import '../style/main.css';

function NavbarComponent() {
    return (
        <div className='custom-navbar'>
            <div className='py-2 top-bar'>
                <Container className='d-flex align-items-center justify-content-between'>
                    <div className="d-flex align-items-center">
                        <FlagIcon className="text-white me-2" />
                        <a href="/help-center" className='text-white text-decoration-none' title='Help Center'>
                            <HelpOutlineIcon className="text-white" />
                        </a>
                    </div>
                    <div>
                        <Button variant="outline-light" className="me-2" onClick={() => window.location.href = '/regis'}>Register</Button>
                        <Button variant="outline-light">Login</Button>
                    </div>
                </Container>
            </div>
            <div className='py-3 nav-links'>
                <Container className='d-flex justify-content-center'>
                    <div className="nav-row d-flex justify-content-between align-items-center text-center">
                        <a href="/populer-room" className='nav-link'>Populer</a>
                        <a href="/tropical-paradise" className='nav-link'>Tropical Paradise</a>
                        <a href="/business-room" className='nav-link'>Superior room</a>
                        <a href="/family-room" className='nav-link'>Family room</a>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default NavbarComponent;
