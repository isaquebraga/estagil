import React, { Component } from "react";

import Header from "../../components/login-aluno/header-login"
import SectionLogin from "../../components/login-aluno/section-login"
import Footer from "../../components/footer"

class LoginAluno extends Component {
    render() {
        return (
            <>
            <Header />
            <SectionLogin />
            <Footer />
            </>
        );
    }
}

export default LoginAluno;