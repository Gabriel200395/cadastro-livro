import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <nav className="orange darken-4 ">
                <div className="nav-wrapper container ">
                    <span className="brand-logo" style={{textIndent:"-100px", fontSize:"20px"}}>Faça seu pedido do seu livro.</span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/CadastroUsuario">Pedidos</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}