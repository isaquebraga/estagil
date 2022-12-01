import React, { Component } from "react";

import Header from "../../../components/logado/perfil/header-perfil";
import SectionPerfil from "../../../components/logado/perfil/section-perfil";

class Perfil extends Component {
    render() {
        return (
            <>
                <Header />
                <SectionPerfil />
            </>
        );
    }
}

export default Perfil;