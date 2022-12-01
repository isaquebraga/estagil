import React, { Component } from "react";

import "./section-perfil.css";

import user from "../../../../assets/img/user.svg";

class SectionPerfil extends Component {
    render(){
        return(
            <>
            <section className="section-perfil">
                <h1 className="title">Perfil do usuário</h1>
                <div className="container-user">
                    <div className="user">
                        <div className="imagem">
                            <img src={user} alt="" />
                        </div>
                        <div className="container-info">
                            <div className="texto">
                                <p className="texto-titulo">Nome:</p>
                                <p className="texto-sub">Maria Graziella Vilela dos Santos</p>
                            </div>
                            <div className="texto">
                                <p className="texto-titulo">Email:</p>
                                <p className="texto-sub">mgvs2@aluno.ifal.edu.br</p>
                            </div>
                            <div className="texto">
                                <p className="texto-titulo">Bio:</p>
                                <p className="texto-sub">Estudante de Engenhari Civil <br /> Técnica em Segurança do Trabalho</p>
                            </div>
                        </div>
                    </div>        
                </div>
            </section>
            </>
        )
    }
}

export default SectionPerfil;