import React, { useRef, useState, useEffect, userData } from "react";
import blogFetch from "../../../axios/config";
import { Link } from 'react-router-dom';

import eye from "../../../assets/img/eye.svg";

import "./section-login.css"

function SectionLogin() {
    const FormRef = useRef();

    const [usuarios, setUsuario] = useState([]);

    const getUsuario = async () => {
        try {
            const response = await blogFetch.get("/users");
            const data = response.data;
            setUsuario(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUsuario();
    }, [])

    async function inputaDados() {
        const {email} = FormRef.current;
        const {senha} = FormRef.current;
        const dados = {
            "email": email.value,
            "senha": senha.value,  
        };

        const emailUsuario = usuarios.map((usuario) => (usuario.email));
        const senhaUsuario = usuarios.map((usuario) => (usuario.senha));


        if(dados.email == emailUsuario && dados.senha == senhaUsuario) {
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
                                                                                            if(input.getAttribute('type') === 'password') {
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