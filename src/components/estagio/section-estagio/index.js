import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
                            <Link to='/login'><div className="inscrever"><p>Se inscrever</p></div></Link>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de TI</p>
                            <p className="requisitos">Estar cursando o nível técnico na área da tecnologia.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Mais informações clicando aqui.</p>
                            <Link to='/login'><div className="inscrever"><p>Se inscrever</p></div></Link>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de TI</p>
                            <p className="requisitos">Estar cursando o nível técnico na área da tecnologia.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Mais informações clicando aqui.</p>
                            <Link to='/login'><div className="inscrever"><p>Se inscrever</p></div></Link>
                        </div>
                    </div>
                    <div className="estagios estagios-2">
                        <div className="estagio">
                            <p className="titulo">Estágio de TI</p>
                            <p className="requisitos">Estar cursando o nível técnico na área da tecnologia.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Mais informações clicando aqui.</p>
                            <Link to='/login'><div className="inscrever"><p>Se inscrever</p></div></Link>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de TI</p>
                            <p className="requisitos">Estar cursando o nível técnico na área da tecnologia.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Mais informações clicando aqui.</p>
                            <Link to='/login'><div className="inscrever"><p>Se inscrever</p></div></Link>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de TI</p>
                            <p className="requisitos">Estar cursando o nível técnico na área da tecnologia.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Mais informações clicando aqui.</p>
                            <Link to='/login'><div className="inscrever"><p>Se inscrever</p></div></Link>
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