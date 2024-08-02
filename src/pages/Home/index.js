import React from 'react';
import HeroComponent from './HeroComp';
import ServiceComponent from './IntroductionComp';
import AccommodationsComp from './AccommodationsComp';
import DisertComponent from './DisertComp';
import EventComp from './EventComp';
import FooterComp from '../FooterComp';


export default class Home extends React.Component {
    render() {
        return (
            <>
                <div style={{ overflow: 'hidden' }}>
                    <HeroComponent />
                    <ServiceComponent />
                    <AccommodationsComp />
                    <DisertComponent />
                    <EventComp />
                    <FooterComp />
                </div>
            </>
        )
    }
}