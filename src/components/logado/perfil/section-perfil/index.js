import React from "react";
import { useState, useEffect, userData } from "react";
import blogFetch from "../../../../axios/config";

import "./section-perfil.css";

import user from "../../../../assets/img/user.svg";

function SectionPerfil() {
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
                            <p className="texto-sub">{usuarios.map((usuario) => (usuario.nome))}</p>
                        </div>
                        <div className="texto">
                            <p className="texto-titulo">Email:</p>
                            <p className="texto-sub">{usuarios.map((usuario) => (usuario.email))}</p>
                        </div>
                        <div className="texto">
                            <p className="texto-titulo">Bio:</p>
                            <p className="texto-sub">{usuarios.map((usuario) => (usuario.descricao))}</p>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
        </>
    )
}

export default SectionPerfil;