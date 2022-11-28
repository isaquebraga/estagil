import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./header-login.css";

class HeaderLogin extends Component {
    render(){
        return(
            <>
            <header className="header-login">
                <span>EstÁgil</span>
                <nav>
                <ul>
                    <li><Link to='/' className="lista-hover">Início</Link></li>
                    <li><Link to='/estagios' className="lista-hover"><a>Estágios</a></Link></li>
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

export default HeaderLogin;