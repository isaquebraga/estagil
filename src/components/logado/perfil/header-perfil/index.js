import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./header-perfil.css";

class HeaderPerfil extends Component {
    render(){
        return(
            <>
            <header className="header-perfil">
                <span>EstÁgil</span>
                <nav>
                <ul>
                    <li><Link to='/home-logado' className="lista-hover"><a>Início</a></Link></li>
                    <li><Link to='/estagios-logado' className="lista-hover"><a>Estágios</a></Link></li>
                    <li><Link to='/perfil' className="lista-hover active"><a>Perfil</a></Link></li>
                </ul>
                </nav>
            </header>
            </>
        )
    }
}

export default HeaderPerfil;