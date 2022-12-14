import React, { Component, useState, useRef } from "react";
import axios from "axios";
import { Form, Link } from 'react-router-dom';

import eye from "../../../assets/img/eye.svg";

import "./section-cadastro.css";

function SectionCadastro() {
    const [data, setData] = useState([]);
    const FormRef = useRef();
    const url = "http://localhost:5000/user";

    async function inputaDados() {
        const {nome} = FormRef.current;
        const {email} = FormRef.current;
        const {senha} = FormRef.current;
        const {bio} = FormRef.current;
        const dados = {
            "id": 1,
            "nome": nome.value,
            "email": email.value,
            "senha": senha.value,
            "bio": bio.value
        };

       if(window.confirm("Confirma os dados?")) {
        setTimeout(function(){
            window.location.replace("http://localhost:3000/login");
        }, 1);
        await axios.post(url, dados); 
       } else {
        setTimeout(function(){
            window.location.replace("http://localhost:3000/cadastro");
        }, 1); 
        alert("Preencha novamente.")
       }
    }

    return(
        <>
        <section className="section-cadastro">
        <div className="content-right">
            <h1>Est</h1>
            <h1>Ágil</h1>
        </div>
        <div className="content-left">
            <form onSubmit={inputaDados} ref={FormRef}>
                <div className="input">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" />
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
                <div className="input">
                    <label htmlFor="bio">Formação</label>
                    <input type="text" id="bio" />
                </div>
                <div className="footer-form">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
        </section>
        </>
    )
}

export default SectionCadastro;