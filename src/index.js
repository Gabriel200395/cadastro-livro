import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';
import CadastroUsuario from './Components/CadastroUsuario/CadastroUsuario';
import ContextApiProvider from './Context/useApi';
import EditarUsuario from './Components/EditarUsuario/EditarUsuario';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/CadastroUsuario" component={CadastroUsuario} />
      <ContextApiProvider>
            <Route path="/Edit/:id" component={EditarUsuario} />
      </ContextApiProvider>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));




  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
