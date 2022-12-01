import React, { Component } from "react";

import "./section-estagio.css";

class SectionEstagio extends Component {
    render(){
        return(
            <>
            <section className="section-estagio">
                <h1 className="title">Estágios disponíveis: </h1>
                    <div className="estagios">
                        <div className="estagio">
                            <p className="titulo">Estágio de TI</p>
                            <p className="requisitos">Estar cursando o nível técnico na área da tecnologia.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Mais informações clicando aqui.</p>
                            <div className="inscrever"><p>Se inscrever</p></div>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de TI</p>
                            <p className="requisitos">Estar cursando o nível técnico na área da tecnologia.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Mais informações clicando aqui.</p>
                            <div className="inscrever"><p>Se inscrever</p></div>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de TI</p>
                            <p className="requisitos">Estar cursando o nível técnico na área da tecnologia.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Mais informações clicando aqui.</p>
                            <div className="inscrever"><p>Se inscrever</p></div>
                        </div>
                    </div>
                    <div className="texto-mais">
                            <p>Mostrar mais</p>
                            <i className="material-icons e5db">arrow_downward</i>
                    </div>
            </section>
            </>
        )
    }
}

export default SectionEstagio;