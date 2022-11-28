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
                    <li><Link to='/' className="lista-hover"><a>Início</a></Link></li>
                    <li><Link to='/estagios' className="lista-hover active"><a>Estágios</a></Link></li>
                    <li className="menu-suspenso">
                    <a className="lista-login">Login</a>
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

export default HeaderEstagio;