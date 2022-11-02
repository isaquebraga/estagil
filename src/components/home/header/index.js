import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./header-home.css";

class HeaderHome extends Component {
    render(){
        return(
            <>
            <header className="header-home">
                <span>EstÁgil</span>
                <nav>
                <ul>
                    <li><Link to='/' className="lista-hover active"><a>Home</a></Link></li>
                    <li><a href="/estagios.html" className="lista-hover">Estágios</a></li>
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

export default HeaderHome;