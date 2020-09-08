import React, { useContext } from 'react'
import { ContextApi } from '../../Context/useApi';

export default function Forms() {

    const { HandleChange, HandleSubmit, Enviar, usuario, erros } = useContext(ContextApi)
    return (
        <div>
            <div className="card" style={{ marginTop: "60px", width: "400px", marginLeft: "370px" }} >
                <div className="card-content grey lighten-5">

                    <form onSubmit={HandleSubmit(Enviar)}>
                        <input name="livro"
                            value={usuario.livro}
                            onChange={HandleChange}
                            placeholder="Nome do livro"
                        />

                        {erros.livro && <p>{erros.livro}</p>}

                        <input
                            name="name"
                            value={usuario.name}
                            onChange={HandleChange}
                            placeholder="nome"
                        />

                        {erros.name && <p>{erros.name}</p>}

                        <input name="turma"
                            value={usuario.turma}
                            onChange={HandleChange}
                            placeholder="turma"
                        />

                        {erros.turma && <p>{erros.turma}</p>}

                        <input name="turno"
                            value={usuario.turno}
                            onChange={HandleChange}
                            placeholder="turno"
                        />

                        {erros.turno && <p>{erros.turno}</p>}

                        <input name="matricula"
                            value={usuario.matricula}
                            onChange={HandleChange}
                            placeholder="Matricula"
                        />
                        {erros.matricula && <p>{erros.matricula}</p>}
                        <input name="telefone"
                            value={usuario.telefone}
                            onChange={HandleChange}
                            placeholder="telefone"
                        />
                        {erros.telefone && <p>{erros.telefone}</p>}
                        <button className="waves-effect  orange darken-4 btn">Send</button>
                    </form>
                </div>
            </div>
        </div>

    );

}