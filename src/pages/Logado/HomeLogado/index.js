import React, { Component } from "react";

import Header from "../../../components/logado/home/header";
import SectionMain from "../../../components/logado/home/section-main";
import SectionCriadores from "../../../components/logado/home/section-criadores";
import Footer from "../../../components/footer";

class HomeLogado extends Component {
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

export default HomeLogado;