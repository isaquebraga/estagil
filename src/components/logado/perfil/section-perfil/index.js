import React, { useState, useRef } from "react";

import "./section-perfil.css";

import user from "../../../../assets/img/user.svg";

function SectionPerfil() {
    const url = "http://localhost:5000/user/1";
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();

    const userData = JSON.parse(xhttp.responseText);

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
                            <p className="texto-sub">{userData.nome}</p>
                        </div>
                        <div className="texto">
                            <p className="texto-titulo">Email:</p>
                            <p className="texto-sub">{userData.email}</p>
                        </div>
                        <div className="texto">
                            <p className="texto-titulo">Bio:</p>
                            <p className="texto-sub">{userData.bio}</p>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
        </>
    )
}

export default SectionPerfil;