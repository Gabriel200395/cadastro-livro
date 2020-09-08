import React, { useEffect, useContext } from 'react'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { ContextApi } from '../../Context/useApi';

export default function EditarUsuario(props) {

    const { HandleChange, usuario, setUsuario, editar, setEditar } = useContext(ContextApi)

    useEffect(() => {
        async function loading() {
            const res = await axios.get("http://localhost:8080/usuario/" + props.match.params.id)
            setUsuario({
                name: res.data.name,
                livro: res.data.livro,
                matricula: res.data.matricula,
                turno: res.data.turno,
                turma: res.data.turma,
                telefone: res.data.telefone,
                _id: res.data,
                editar: true,
            })
        }
        loading()
    }, [props.match.params.id, setUsuario])

    const HandleSubmit = async (e) => {
        e.preventDefault();
        if (!editar) {
            const _id = props.match.params.id
            const res = await axios.put('http://localhost:8080/usuario/' + _id, usuario);
            setEditar(res.data)
        } else {
            axios.post('http://localhost:8080/usuario', usuario);
        }
        
        window.location.href = '/';
    }
    
    return (
        <section>
            <Navbar />
            <div className="card" style={{ marginTop: "60px", width: "400px", marginLeft: "370px" }} >
                <div className="card-content grey lighten-5">

                    <form onSubmit={HandleSubmit}>
                        <input name="livro"
                            placeholder="Nome do livro"
                            onChange={HandleChange}
                            value={usuario.livro}
                        />
                        <input
                            name="name"
                            placeholder="nome"
                            onChange={HandleChange}
                            value={usuario.name}

                        />
                        <input name="turma"
                            placeholder="turma"
                            onChange={HandleChange}
                            value={usuario.turma}

                        />
                        <input name="turno"
                            placeholder="turno"
                            onChange={HandleChange}
                            value={usuario.turno}

                        />
                        <input name="matricula"
                            placeholder="Matricula"
                            onChange={HandleChange}
                            value={usuario.matricula}

                        />
                        <input name="telefone"
                            placeholder="telefone"
                            onChange={HandleChange}
                            value={usuario.telefone}
                        />
                        <button className="waves-effect  orange darken-4 btn">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )

}













