import React, { lazy } from "react";
import HeroComponent from "./pages/HeroComp";
import ServiceComponent from "./pages/IntroductionComp";
import AccommodationsComp from "./pages/AccommodationsComp";
import DisertComponent from "./pages/DisertComp";
import EventComp from "./pages/EventComp";
import FooterComp from "./pages/FooterComp";

// const AboutComponent = lazy(() => import("./pages/AboutComp"));

export default class App extends React.Component {
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
        );
    }
}