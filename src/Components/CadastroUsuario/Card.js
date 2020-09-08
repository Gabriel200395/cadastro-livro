import React, { useContext } from 'react'
import { ContextApi } from '../../Context/useApi';
import { Link } from 'react-router-dom';

const Card = () => {
    const { usuarios, deleteUsuario } = useContext(ContextApi);
    return (
        <div class="row">
            <div class="col s12">
                {
                    usuarios.map((usuario) => (
                        <div className="col 3" key={usuario._id} style={{ marginTop: "50px" }}>
                            <div className="card grey lighten-5">
                                <div className="card-content white-text orange darken-4">
                                    <span className="card-title   center">{usuario.name}</span>
                                </div>
                                <div className="card-action">
                                    <ul style={{ listStyle: "none" }}>
                                        <li>livro: {usuario.livro}</li>
                                        <li> turma: {usuario.turma}</li>
                                        <li> telefone: {usuario.telefone}</li>
                                        <li> matricula: {usuario.matricula}</li>
                                        <li> turno: {usuario.turno}</li>
                                    </ul>
                                </div>
                                <div className="card-action">
                                    <button className="waves-effect orange darken-4 btn"
                                        onClick={() => deleteUsuario(usuario._id)}>Remove</button>
                                    <Link style={{ marginLeft: "10px" }} to={"/Edit/" + usuario._id} className="waves-effect orange darken-4 btn">Editar</Link>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>

    );
}

export default Card;

