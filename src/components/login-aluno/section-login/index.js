import React, { Component, useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

import eye from "../../../assets/img/eye.svg";

import "./section-login.css"

function SectionLogin() {
    const [data, setData] = useState([]);
    const FormRef = useRef();
    const url = "http://localhost:5000/user/1";
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();

    const userData = JSON.parse(xhttp.responseText);

    async function inputaDados() {
        const {email} = FormRef.current;
        const {senha} = FormRef.current;
        const dados = {
            "email": email.value,
            "senha": senha.value,  
        };

        if(dados.email == userData.email && dados.senha == userData.senha) {
            setTimeout(function(){
                window.location.replace("http://localhost:3000/home-logado");
            }, 1); 
        } else {
            alert("Dados incorretos.")
            setTimeout(function(){
                window.location.replace("http://localhost:3000/login");
            }, 1); 
        }
    }

    return(
        <>
        <section className="section-login">
        <div className="content-right">
            <h1>Est</h1>
            <h1>Ágil</h1>
        </div>
        <div className="content-left">
            <form onSubmit={inputaDados} ref={FormRef}>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="input">
                    <label htmlFor="senha">Senha</label>
                    <div className="input-password">
                    <input className="input-password-input" type="password" id="senha" />
                    <img id="olho" className="input-password-img" src={eye} alt="" onClick={() =>{let btn = document.querySelector('.input-password-img');
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
                    <p className="forget">Esqueceu sua senha? <Link to='/'>Esqueci.</Link></p>
                    <button type="submit">Login</button>
                    <p className="create">Não possui uma conta? <Link to='/cadastro'>Cadastrar.</Link></p>
                </div>
            </form>
        </div>
        </section>
        </>
    )
}

export default SectionLogin;