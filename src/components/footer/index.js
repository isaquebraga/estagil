import React, { Component } from "react";

import instagram from "../../assets/img/instagram-footer.png"
import facebook from "../../assets/img/facebook-footer.png"
import twitter from "../../assets/img/twitter-footer.png"

class FooterIndex extends Component {
    render(){
        return(
            <>
            <footer>
                <div>
                    <div className="redes-footer">
                        <a href="https://instagram.com" target="new_blank"><img src={instagram} alt="icone do instagram" /></a>
                        <a href="https://facebook.com" target="new_blank"><img src={facebook} alt="icone do facebook" /></a>
                        <a href="https://twitter.com" target="new_blank"><img src={twitter} alt="icone do twitter" /></a>
                    </div>
                    <div className="texto-footer"><p>© 2022 EstÁgil | Todos os direitos reservados.</p></div>
                </div>
            </footer>
            </>
        )
    }
}

export default FooterIndex;