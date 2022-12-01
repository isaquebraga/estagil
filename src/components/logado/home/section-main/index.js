import React, { Component } from "react";

import instagram from "../../../../assets/img/instagram.png"
import facebook from "../../../../assets/img/facebook.png"
import twitter from "../../../../assets/img/twitter.png"

import "./section-main.css";

class SectionMain extends Component {
    render(){
        return(
            <>
            <section className="main-section">
                <div className="email">
                    <p>estagil@gmail.com</p>
                </div>
                <div className="middle-content">
                    <div className="meio">
                        <h1>Estágio <br /> Aqui</h1>
                        <p className="texto-meio">Estágios de uma maneira mais ágil.</p>
                        <a href="#butao">
                        <div className="texto-saiba-mais">
                            <p>Saiba mais</p>
                            <i className="material-icons e5db">arrow_downward</i>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="redes">
                    <a href="https://instagram.com/grazi_ella6" target="new_blank"><img src={instagram} alt="icone do instagram" /></a>
                    <a href="https://facebook.com" target="new_blank"><img src={facebook} alt="icone do facebook" /></a>
                    <a href="https://twitter.com" target="new_blank"><img src={twitter} alt="icone do twitter" /></a>
                </div>
                <h1 className="texto-background">ESTÁGIL</h1>
            </section>
            </>
        )
    }
}

export default SectionMain;