
import {environment} from '../../environments/environment'


    
export function getProjects (token)   {

     const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json', 
            Authorization: 'Bearer ' + token 
        }
    };

    return fetch(`${environment.url_endpoint}projects`, requestOptions)
}

export function  getProject (id, token)   {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json', 
            Authorization: 'Bearer ' + token 
        }
    };

    return fetch(`${environment.url_endpoint}projects/${id}`, requestOptions)
}

export function create (data, token){
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json', 
            Authorization: 'Bearer ' + token 
        },
        body: JSON.stringify(data)
    };

    return fetch(`${environment.url_endpoint}projects`, requestOptions)
}

export function update (id, data, token)   {

    const requestOptions = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json', 
            Authorization: 'Bearer ' + token 
        },
        body: JSON.stringify(data)
    };

    return fetch(`${environment.url_endpoint}projects/${id}`, requestOptions)
}

export function destroy (id, token)   {
    const requestOptions = {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json', 
            Authorization: 'Bearer ' + token 
        },
        body: {}
    };

    return fetch(`${environment.url_endpoint}projects/${id}`, requestOptions)
}

export function getProjectsPublic (token)   {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json', 
            Authorization: 'Bearer ' + token 
        }
    };
    return fetch(`${environment.url_endpoint}projects/list`, requestOptions)
}