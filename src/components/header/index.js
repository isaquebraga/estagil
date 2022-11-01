import React, { Component } from "react";

class HeaderIndex extends Component {
    render(){
        return(
            <>
            <header>
                <span>EstÁgil</span>
                <nav>
                <ul>
                    <li className="lista-inicio"><a href="/index.html" className="lista-hover">Início</a></li>
                    <li><a href="/estagios.html" className="lista-hover">Estágios</a></li>
                    <li className="menu-suspenso">
                    <a href="#" className="lista-login">Login</a>
                    <ul>
                        <li><a href="#">Aluno</a></li>
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

export default HeaderIndex;