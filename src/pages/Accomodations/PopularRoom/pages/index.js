import React from "react";
import NavbarComponent from "./navbar";
import Recommendations from "./body";
import Footer from "../../../FooterComp";

export default class PopularPages extends React.Component {
    render() {
        return (
            <>
                <NavbarComponent />
                <Recommendations />
                <Footer />
            </>
        );
    }
}