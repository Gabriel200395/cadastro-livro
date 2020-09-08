import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'
import M from 'materialize-css';

export const ContextApi = createContext();

const useApi = ({ children, Callback }) => {

    const [erros, setErros] = useState({});
    const [usuarios, setUsuarios] = useState([]);
    const [editar, setEditar] = useState(false);
    const [usuario, setUsuario] = useState({
        name: '',
        livro: '',
        matricula: '',
        turno: '', turma: '',
        telefone: ''
    });


    //VALIDACÃO CHANGE DE INPUT 
    const HandleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }


    //ENVIAR DADOS
    const HandleSubmit = Callback => event => {
        event.preventDefault();
        setUsuario({ name: '', turma: '', turno: '', matricula: '', telefone: '', livro: '' });
        setErros(Validate(usuario))
        Callback();
    }


    //ENVIAR DADOS PARA API REST  
    const Enviar = () => {
        Axios.post("http://localhost:8080/usuario", usuario).then((res) => {
            console.log(res.data)
            M.toast({ html: 'Usuario cadastrado com sucesso!' });
        }).catch((error) => {
            console.log("error ao enviar os dados");
        })
    }


    //VALIDATE DOS CAMPOS
    const Validate = () => {
        let erros = {}
        if (!usuario.name) {
            erros.name = "escreva seu Nome"
            erros.livro = "escreva seu Livro"
            erros.turma = "escreva sua Turma"
            erros.turno = "escreva seu Turno que voce estudar"
            erros.matricula = "escreva sua matricula"
            erros.telefone = "escreva seu Telefone"

        }
        return erros;
    }


    // TRAZ OS DADOS DO BANCO
    useEffect(() => {
        async function Data() {
            const res = await Axios.get("http://localhost:8080/usuario");
            setUsuarios(res.data);
        }
        Data();
    }, [])


    // EXCLUIR OS DADOS DO MEU BANCO
    const deleteUsuario = (_id) => {
        if (!usuario._id) {
            Axios.delete(`http://localhost:8080/usuario/${_id}`).then((res) => {
                setUsuarios(usuarios.filter(usuario => usuario._id !== _id));
                console.log(res.data);
            }).then(() => {
                M.toast({ html: 'Usuario excluido com sucesso' });
            }).catch((err) => {
                M.toast({ html: 'erro ao excluir o usuario' });
            })
        }
    }

    return (
        <ContextApi.Provider value={{
            HandleChange,
            HandleSubmit,
            Enviar,
            deleteUsuario,
            setEditar,
            setUsuario,
            setUsuarios,
            usuario,
            erros,
            usuarios,
            editar,

        }}>
            {children}
        </ContextApi.Provider>
    )
}



export default useApi;