import React, { Component } from 'react';
import './list-project.component.sass';
import * as projectService from '../../services/project.services'

import fondoBlanco from '../../../../assets/images/fondo_blanco.png';
import fondorRojo from '../../../../assets/images/fondo_rojo.png';
const token = localStorage.getItem('soho.token');
export default class ListProject extends Component {
    
    state = {
        projects: []
    }

    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        projectService.getProjectsPublic(token)
            .then(response => response.json())
            .then(data => this.setState({ projects: data.data }));
    }

    render() {
        return <> { /* eslint-disable-line no-undef */}
        { this.state.projects.map((project, i) => {
        return  <section key={project.id} className="list-project" id={project.id}>
                        <div className="contenedor-list-project" id={( ( i % 2 ) === 0 ) ? 'container-white' : 'container-red'}>
                        {( i % 2 ) === 0 ? <div className="image">
                        <img src={fondoBlanco}
                                alt="Image"
                                className="image-project" />
                        </div> : '' }
                        <div className="content">
                            <h3 id={( ( i % 2 ) === 0 ) ? 'title-white' : 'title-red'}>{project.code}</h3>
                            <p id={( ( i % 2 ) === 0 ) ? 'subtitle-white' : 'subtitle-red'}>{project.name}</p>
                            <p id={( ( i % 2 ) === 0 ) ? 'paragraph-white' : 'paragraph-red'}>{project.description}</p >
                            <a href="" id={( ( i % 2 ) === 0 ) ? 'detail-white' : 'detail-red'}> Ver detalles</a>
                        </div >
                        {( i % 2 ) !== 0 ? <div className="image">
                            <img src={fondorRojo}
                                alt="Image"
                                className="image-project" />
                            </div> : ''}
                        </div>
                </section >
        })}
        </>
    }
    
}