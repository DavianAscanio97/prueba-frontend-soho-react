import React, { Component } from 'react';
import './form-project.component.sass';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
} from "react-reactive-form";
import { withRouter  } from 'react-router-dom'
import  * as projectService from '../../services/project.services'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom'
import { isExpired } from "react-jwt";

const TextInput = ({ handler, touched, hasError, meta }) => (
    <div>
        <input className="form-control" {...handler()} />
        <span>
            {touched
                && hasError("required")
                && <div severity="error" text="El nombre es requerido." ng-reflect-severity="error">
                    <div aria-live="polite" className="p-inline-message p-component p-inline-message-error">
                        <span className="p-inline-message-icon pi pi-times-circle"></span>
                    <span className="p-inline-message-text">El campo {meta.label} es requerido</span>
                    </div>
                </div>}
        </span>
    </div>
)

const TextArea = ({ handler, touched, hasError, meta }) => (
    <div>
        <textarea className="form-control" {...handler()}></textarea>
        <span>
            {touched
                && hasError("required")
                && <div severity="error" text="El nombre es requerido." ng-reflect-severity="error">
                    <div aria-live="polite" className="p-inline-message p-component p-inline-message-error">
                        <span className="p-inline-message-icon pi pi-times-circle"></span>
                        <span className="p-inline-message-text">El campo {meta.label} es requerido</span>
                    </div>
                </div>}
        </span>
    </div>
)
let id = null;



class FormProject extends Component {
    constructor(props) {
        super(props);
        id = this.props.match.params.id;
    }

    state = {
        openModal: false,
        id: null,
        name: null
    }

    frm = FormBuilder.group({
        code: [null, Validators.required],
        description: [null, Validators.required],
        name: [null, Validators.required],
    });

    componentDidMount() {
        const isMyTokenExpired = isExpired(localStorage.getItem('soho.token'));
        if (isMyTokenExpired) return this.props.history.push("/")
        if (id) this.loadForm(id)
    }
    
    onCloseModal = () => {
        this.setState({ openModal: false })
    }

    openModalDelete = (e, id, name) => {
        e.preventDefault()
        console.log("sss");
        this.setState({ openModal: true, id, name })
    }

    deleteProject(id) {
        projectService.destroy(id, localStorage.getItem('soho.token'))
            .then(response => response.json())
            .then(() => {
                this.onCloseModal()
                this.props.history.push("/project/index")
            });
    }

    loadForm(id){
        projectService.getProject(id, localStorage.getItem('soho.token'))
            .then(response => response.json())
            .then((res) =>{
                let data = res.data; 
                this.frm.controls['code'].setValue(data.code)
                this.frm.controls['name'].setValue(data.name)
                this.frm.controls['description'].setValue(data.description)
            });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let data = this.frm.getRawValue()
        let token = localStorage.getItem('soho.token')
        if(id){
            projectService.update(id, data, token)
                .then(response => response.json())
                .then(() => this.props.history.push("/project/index"));
        }else{
            projectService.create(data, token)
                .then(response => response.json())
                .then(() => this.props.history.push("/project/index"));
        }
        
    }

    render() {
        return  <div className="container mt-5">
            <FieldGroup control={this.frm}
                render={({ get, invalid }) => (
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Código</label>
                        <div className="col-sm-10">
                            <FieldControl
                                name="code"
                                render={TextInput}
                                meta={{ label: "código" }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10">
                            <FieldControl
                                name="name"
                                render={TextInput}
                                meta={{ label: "nombre" }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Descripción</label>
                        <div className="col-sm-10">
                            <FieldControl
                                name="description"
                                render={TextArea}
                                meta={{ label: "descripción" }}/>
                        </div>
                    </div>
                     <div className="form-group row justify-content-end p-3">
                        <Link to="/project/index">
                                <button type="button" className="btn btn-secondary mr-5">
                                    <i className="pi pi-arrow-left"></i> Regresar
                                </button>
                        </Link>
                        { id ? <button type="button" onClick={(e) => this.openModalDelete(e, id, this.frm.controls['code'].value)} className="btn btn-danger mr-5">
                                <i className="pi pi-trash"></i> Eliminar
                        </button>: ''}
                        <button type="submit" disabled={invalid} className="btn btn-success">
                            <i className="pi pi-save"></i> Guardar
                        </button>
                    </div>
                </form>
            )}/>


            <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                <div className="row">
                    <div className="col-10 mt-3">
                        <p><i className="pi pi-exclamation-triangle" style={{ fontSize: '1.2rem' }}></i>
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
        </div>
        
    }
}

export default withRouter(FormProject);