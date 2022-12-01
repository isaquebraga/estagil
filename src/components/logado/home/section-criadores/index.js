import React, { Component } from "react";

import isaque from "../../../../assets/img/isaque.jpg";
import graziella from "../../../../assets/img/graziella.jpg";

import "./section-criadores.css";

class SectionCriadores extends Component {
    render(){
        return(
            <>
            <section className="criadores">
                <button id="butao">
                Estágios
                </button>
                <div className="cards-criadores">
                    <div className="card-criadores">
                        <img src={graziella} alt="foto da grazi" />
                        <p className="texto-criador">“Encontrar um estágio sempre foi uma dificuldade, dessa forma surge a ideia do EstÁgil.”</p>
                        <p className="nome-criador">- Maria Graziella</p>
                    </div>
                    <div className="card-criadores">
                        <img src={isaque} alt="foto do isaque" />
                        <p className="texto-criador">“Ao perceber uma dificuldade para encontrarmos estágios. Eu e Grazi tivemos essa ideia!”</p>
                        <p className="nome-criador">- Isaque Braga</p>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default SectionCriadores;