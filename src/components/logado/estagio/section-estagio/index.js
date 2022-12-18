import React, { Component } from "react";

import "./section-estagio.css";

class SectionEstagio extends Component {
    render(){
        return(
            <>
            <section className="section-estagio">
                <h1 className="title">Estágios disponíveis:</h1>
                <div className="estagios">
                        <div className="estagio">
                            <p className="titulo">Estágio de TI</p>
                            <p className="requisitos">Estar cursando o nível técnico na área da tecnologia da informação.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Enviar currículo para o e-mail:<br></br> estagil-vaga01@gmail.com</p>
                            <a href="https://google.com" target="new_blank"><div className="inscrever"><p>Enviar e-mail</p></div></a>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de Logística</p>
                            <p className="requisitos">Ter concluído o técnico em logística.</p>
                            <p className="salario">Bolsa de R$400,00 + Vale tranporte.</p>
                            <p className="mais-informacoes">Se inscrever no site da empresa.</p>
                            <a href="https://google.com" target="new_blank"><div className="inscrever"><p>Site da empresa</p></div></a>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de Marketing</p>
                            <p className="requisitos">Estar cursando o nível superior na área de Marketing ou afim.</p>
                            <p className="salario">Vale transporte + Bolsa alimentação.</p>
                            <p className="mais-informacoes">Mandar seu repositório no para o e-mail:<br></br> estagil-vaga01@gmail.com.</p>
                            <a href="https://google.com" target="new_blank"><div className="inscrever"><p>Enviar e-mail</p></div></a>
                        </div>
                    </div>
                    <div className="estagios estagios-2">
                        <div className="estagio">
                            <p className="titulo">Estágio de Química</p>
                            <p className="requisitos">Estar cursando o nível técnico ou superior na área da Química.</p>
                            <p className="salario">Vale tranporte.</p>
                            <p className="mais-informacoes">Se inscrever no site da empresa.</p>
                            <a href="https://google.com" target="new_blank"><div className="inscrever"><p>Site da empresa</p></div></a>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de Gestão</p>
                            <p className="requisitos">Estar cursando o nível técnico na área de adminstração.</p>
                            <p className="salario">Bolsa de R$800,00.</p>
                            <p className="mais-informacoes">Enviar currículo para o e-mail:<br></br> estagil-vaga01@gmail.com</p>
                            <a href="https://google.com" target="new_blank"><div className="inscrever"><p>Enviar e-mail</p></div></a>
                        </div>
                        <div className="estagio">
                            <p className="titulo">Estágio de Eletrônica</p>
                            <p className="requisitos">Estar cursando o nível técnico em Eletrônica.</p>
                            <p className="salario">Sem remuneração.</p>
                            <p className="mais-informacoes">Se inscrever no site da empresa.</p>
                            <a href="https://google.com" target="new_blank"><div className="inscrever"><p>Site da empresa</p></div></a>
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