import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./header-cadastro.css";

class HeaderCadastro extends Component {
    render(){
        return(
            <>
            <header className="header-cadastro">
                <span>EstÁgil</span>
                <nav>
                <ul>
                    <li><Link to='/' className="lista-hover">Início</Link></li>
                    <li><a href="/estagios.html" className="lista-hover">Estágios</a></li>
                    <li className="menu-suspenso">
                    <a className="lista-login active">Login</a>
                    <ul>
                        <li><Link to='/login-aluno'>Aluno</Link></li>
                        <li><a href="#">Empresa</a></li>
                    </ul>
                    </li>
                </ul>
                </nav>
            </header>
            </>
        )
    }
}

export default HeaderCadastro;