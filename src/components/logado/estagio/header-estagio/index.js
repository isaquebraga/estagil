import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./header-estagio.css";

class HeaderEstagio extends Component {
    render(){
        return(
            <>
            <header className="header-home">
                <span>EstÁgil</span>
                <nav>
                <ul>
                    <li><Link to='/home-logado' className="lista-hover"><a>Início</a></Link></li>
                    <li><Link to='/estagios-logado' className="lista-hover active"><a>Estágios</a></Link></li>
                    <li><Link to='/perfil' className="lista-hover"><a>Perfil</a></Link></li>
                </ul>
                </nav>
            </header>
            </>
        )
    }
}

export default HeaderEstagio;