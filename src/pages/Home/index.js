import React, { Component } from "react";

import Header from "../../components/home/header";
import SectionMain from "../../components/home/section-main";
import SectionCriadores from "../../components/home/section-criadores";
import Footer from "../../components/footer";

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <SectionMain />
                <SectionCriadores />
                <Footer />
            </>
        );
    }
}

export default Home;