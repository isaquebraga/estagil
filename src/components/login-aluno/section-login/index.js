import React, { Component } from "react";

import eye from "../../../assets/img/eye.svg";
import eyeOff from "../../../assets/img/eye-off.svg";

import "./section-login.css";

class SectionLogin extends Component {
    render(){
        return(
            <>
            <section className="section-login">
            <div className="content-left">
                <form>
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
                        <p className="forget">Esqueceu sua senha? <a href="#">Esqueci.</a></p>
                        <button>Login</button>
                        <p className="create">Não possui uma conta? <a href="/cadastro.html">Criar conta.</a></p>
                    </div>
                </form>
            </div>
            <div className="content-right">
                <h1>Est</h1>
                <h1>Ágil</h1>
            </div>
            </section>
            </>
        )
    }
}

export default SectionLogin;