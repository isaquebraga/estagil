import React from "react";
import { useState, useEffect } from "react";
import blogFetch from "../../../../axios/config";

import "./section-estagio.css";

function SectionEstagio() {
    const [estagios, setEstagios] = useState([]);

    const getPosts = async () => {
        try {
            const response = await blogFetch.get("/estagios");
            const data = response.data;
            setEstagios(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPosts();
    }, [])

    return(
        <>
        <section className="section-estagio">
            <h1 className="title">Estágios disponíveis: </h1>
                <div className="estagios">
                    {estagios.map((estagio) => (
                        <div className="estagio" key={estagio.id}>
                        <p className="titulo">{estagio.titulo}</p>
                        <p className="requisitos">{estagio.requisitos}</p>
                        <p className="salario">{estagio.salario}</p>
                        <p className="mais-informacoes">{estagio.informacoes}</p>
                        <a href="http://localhost:3000/login"><div className="inscrever"><p>{estagio.inscricao}</p></div></a>
                        </div>
                    ))}
                </div>
                <div className="texto-mais">
                        <p>Mostrar mais</p>
                        <i className="material-icons e5db">arrow_downward</i>
                </div>
        </section>
        </>
    )
    }

export default SectionEstagio;