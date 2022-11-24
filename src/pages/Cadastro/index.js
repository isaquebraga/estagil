import React, { Component } from "react";

import Header from "../../components/cadastro/header-cadastro"
import SectionCadastro from "../../components/cadastro/section-cadastro"
import Footer from "../../components/footer"

class Cadastro extends Component {
    render() {
        return (
            <>
            <Header />
            <SectionCadastro />
            <Footer />
            </>
        );
    }
}

export default Cadastro;