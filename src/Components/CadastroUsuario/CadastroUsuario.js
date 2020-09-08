import React from 'react'
import Navbar from '../Navbar/Navbar';
import ContextApiProvider from '../../Context/useApi';
import Card from './Card';

export default function CadastroUsuario() {

    return (
        <ContextApiProvider>
            <div>
               <Navbar />
               <Card />
            </div>
        </ContextApiProvider>

    )

}