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
                <li><Link to='/' className="lista-hover"><a>Início</a></Link></li>
                    <li><Link to='/estagios' className="lista-hover"><a>Estágios</a></Link></li>
                    <li><Link to='/login' className="lista-hover active"><a>Login</a></Link></li>
                </ul>
                </nav>
            </header>
            </>
        )
    }
}

export default HeaderLogin;