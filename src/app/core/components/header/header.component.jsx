import React, { Component } from 'react';

import './header.component.sass';
import { withRouter } from 'react-router-dom'
import * as authService from '../../services/auth.service';
import logo from '../../../../assets/images/logo-soho.png'
class Header extends Component {

    login = () => {
        let data = {
            email: 'crisfalt@gmail.com',
            password: 'test'
        }
        authService.signIn(data)
            .then(response => response.json())
            .then(result => {
                localStorage.setItem('soho.token', result.data.access_token);
                if (localStorage.getItem('soho.token')) this.props.history.push("/project/index")
            });
    }

    render() {
        return <> { /* eslint-disable-line no-undef */}
        <header>
                <div className="contenedor">
                    <div className="navbar">
                        <h1 className="logo"><img src={logo} alt="" /></h1>
                        <nav className="menu">
                            <a href={'/'} >inicio</a>
                            <a href={'/'} >nosotros</a>
                            <a href={'/'} >servicios</a>
                            <a href={'/'} >casos de exito</a>
                            <a href={'/'} >únete al equipo</a>
                            <a href={'/'} >contacto</a>
                            <a href={'#'} style={{ color: "#fff", cursor:'pointer' }} onClick={this.login} >iniciar sesión</a>
                    </nav>
                </div>
                <div className="contenido-header">
                    <h1 className="titulo-header">Nos especializamos en</h1>
                    <h2 className="texto-header"><strong>interfaces digitales que los usuarios aman</strong></h2>
                    <a href={'/'}  className="action-header">HABLEMOS DE TU PROYECTO</a>
                </div>
            </div>
        </header ></>
    }
}

export default withRouter(Header);