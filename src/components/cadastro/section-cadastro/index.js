import React, { useState, useRef } from "react";
import axios from "axios";

import eye from "../../../assets/img/eye.svg";

import "./section-cadastro.css";

function SectionCadastro() {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [descricao, setDescricao] = useState();
    const [file, setFile] = useState("");

    function mudarUrl(novaUrl) {
        window.location.href = novaUrl;
    }

    const handleImage = (e) => {
        setFile(e.target.files[0]);
    }

    const createUsuario = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", file)

        await axios.post("https://image-upload.isaquebrag.repl.co/upload", formData).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

        await axios.post("https://tepi.isaquebrag.repl.co/users", {
            nome: nome,
            email: email,
            senha: senha, 
            descricao: descricao, 
        });

        mudarUrl("http://localhost:3000/login");
    };

    return (
        <>
            <section className="section-cadastro">
                <div className="content-right">
                    <h1>Est</h1>
                    <h1>Ágil</h1>
                </div>
                <div className="content-left">
                    <form onSubmit={(e) => createUsuario(e)}>
                        <div className="input">
                            <label htmlFor="nome">Nome*</label>
                            <input type="text" id="nome" name="nome" onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input">
                            <label htmlFor="senha">Senha*</label>
                            <div className="input-password">
                                <input className="input-password-input" type="password" id="senha" name="senha" onChange={(e) => setSenha(e.target.value)} />
                                <img className="input-password-img" src={eye} alt="" onClick={() => {
                                    let btn = document.querySelector('.input-password-img');
                                    btn.addEventListener('click', function () {
                                        let input = document.querySelector('.input-password-input');
                                        if (input.getAttribute('type') == 'password') {
                                            input.setAttribute('type', 'text');
                                        } else {
                                            input.setAttribute('type', 'password');
                                        }
                                    });
                                }} />
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="descricao">Formação</label>
                            <input type="text" id="descricao" name="descricao" onChange={(e) => setDescricao(e.target.value)} />
                        </div>
                        <div className="input input-foto">
                            <label htmlFor="foto">Foto</label>
                            <div className="input-div-foto">
                                <input className="input-foto" type="file" id="file" name="file" onChange={handleImage} />
                            </div>
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