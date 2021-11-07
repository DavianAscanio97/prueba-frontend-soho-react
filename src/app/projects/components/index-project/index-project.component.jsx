import React, { Component } from 'react';
import './index-project.component.sass';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import * as projectService from '../../services/project.services'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { isExpired } from "react-jwt";

class IndexProject extends Component {
    
    state = {
        projects: [],
        openModal: false,
        id: null,
        name: null
    }

    onCloseModal = () => {
        this.setState({ openModal: false })
    }

    componentDidMount() {
        const isMyTokenExpired = isExpired(localStorage.getItem('soho.token'));
        if (isMyTokenExpired) return this.props.history.push("/")
        this.getProjects();
    }

    getProjects = () => {
        projectService.getProjects(localStorage.getItem('soho.token'))
            .then(response => response.json())
            .then(data => this.setState({ projects: data.data }));
    }

    edit = (id) => {
        this.props.history.push('/project/edit/'+id)
    }

    openModalDelete = (e, id, name) => {
        e.preventDefault()
        this.setState({ openModal: true, id, name})
    }

    deleteProject(id){
        let  { projects } = this.state
        projects = []
        projectService.destroy(id, localStorage.getItem('soho.token'))
            .then(response => response.json())
            .then(() => { 
                this.getProjects()
                this.onCloseModal()
            });
    }

    render() {
        const { projects } = this.state
    return <>
        { /* eslint-disable no-undef */}
        <div className="col-12 input-group mt-3 mb-2">
            <div className="col-6">
                    <h1 className="h3 mb-0 text-gray-800">Lista de proyectos</h1>
            </div>
            <div className="col-6">
                    <Link to="/project/form">
                        <button className="btn btn-info float-right">Nuevo Proyecto</button>
                    </Link>
            </div>  
        </div>
            <div className="col-12 input-group mt-2 mb-2">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Nombre del proyecto	</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { projects.map((project) => {
                            return <tr key={project.id}>
                                <td>{project.code}</td>
                                <td>{project.name}</td>
                                <td>{project.description}</td>
                                <td>{new Date(project.created_at).toLocaleString() }</td>
                                <td>
                                <button type="button" onClick={() =>this.edit(project.id)} className="btn btn-primary ml-1">
                                        <i className="pi pi-pencil"></i>
                                </button>
                                    <button type="button" onClick={(e) => this.openModalDelete(e, project.id, project.code)} className="btn btn-danger ml-1">
                                    <i className="pi pi-trash"></i>
                                </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                <div className="row">
                    <div className="col-10 mt-3">
                    <p><i className="pi pi-exclamation-triangle" style={{fontSize:'1.2rem'}}></i> 
                        ¿Está seguro de que desea borrar el proyecto "{this.state.name}"?</p>
                    <button type="button" onClick={() => this.onCloseModal()} className="btn btn-dark ml-1">
                        Cancelar
                    </button>
                    <button type="button" onClick={(e) => this.deleteProject(this.state.id)} className="btn btn-success ml-1">
                        Si
                    </button>
                    </div>
                </div>
            </Modal>
    </>
    }
}

export default withRouter(IndexProject);