import React, { Component } from "react";
import { Link } from 'react-router-dom';

import eye from "../../../assets/img/eye.svg";

import "./section-cadastro.css";

class SectionCadastro extends Component {
    render(){
        return(
            <>
            <section className="section-cadastro">
            <div className="content-right">
                <h1>Est</h1>
                <h1>Ágil</h1>
            </div>
            <div className="content-left">
                <form>
                    <div className="input">
                        <label htmlFor="text">Nome</label>
                        <input type="texte" id="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="input">
                        <label htmlFor="senha">Senha</label>
                        <div className="input-password">
                        <input className="input-password-input" type="password" id="senha" />
                        <img className="input-password-img" src={eye} alt="" onClick={() =>{let btn = document.querySelector('.input-password-img');
                                                                                            btn.addEventListener('click', function() {
                                                                                                let input = document.querySelector('.input-password-input');
                                                                                                if(input.getAttribute('type') == 'password') {
                                                                                                    input.setAttribute('type', 'text');
                                                                                                } else {
                                                                                                    input.setAttribute('type', 'password');
                                                                                                }
                                                                                            });}}/>
                        </div>
                    </div>
                    <div className="footer-form">
                        <Link to='/login-aluno'><button>Cadastrar</button></Link>
                    </div>
                </form>
            </div>
            </section>
            </>
        )
    }
}

export default SectionCadastro;