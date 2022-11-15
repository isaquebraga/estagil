import React, { Component } from "react";

import Header from "../../components/login-aluno/header-login"
import SectionLogin from "../../components/login-aluno/section-login"

class LoginAluno extends Component {
    render() {
        return (
            <>
            <Header />
            <SectionLogin />
            </>
        );
    }
}

export default LoginAluno;