import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';
import ColaboradorState from './context/colaboradores/colaboradorState'

import Login from './components/auth/Login'
import Registro from './components/auth/Registro'
import Proyectos from './components/proyectos/Proyectos'

import RutasPrivadas from './components/rutas/RutasPrivadas'
import tokenAuth from './config/token'

  const token = localStorage.getItem('token');
    if(token)
      tokenAuth(token)

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <ColaboradorState>
            <Router>
              <Switch>
                <Route exact path="/" component= {Login} />
                <Route exact path="/Registro" component= {Registro} />
                <RutasPrivadas exact path="/Proyectos" component= {Proyectos} />
              </Switch>
            </Router>
            </ColaboradorState>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
