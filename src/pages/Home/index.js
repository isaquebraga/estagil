import React, { Component } from "react";

import HeaderIndex from "../../components/header";
import SectionMain from "../../components/section";
import SectionCriadores from "../../components/criadores";
import FooterIndex from "../../components/footer";

import "./style.css";

class Home extends Component {
    render() {
        return (
            <>
                <HeaderIndex />
                <SectionMain />
                <SectionCriadores />
                <FooterIndex />
            </>
        );
    }
}

export default Home;