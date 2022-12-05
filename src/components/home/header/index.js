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
                    <li><Link to='/' className="lista-hover active"><a>Início</a></Link></li>
                    <li><Link to='/estagios' className="lista-hover"><a>Estágios</a></Link></li>
                    <li><Link to='/login' className="lista-hover"><a>Login</a></Link></li>
                </ul>
                </nav>
            </header>
            </>
        )
    }
}

export default HeaderHome;