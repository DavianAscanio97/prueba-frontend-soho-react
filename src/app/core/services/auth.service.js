import { environment } from '../../environments/environment'

export function signIn(data) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
 return fetch(`${environment.url_endpoint}login`, requestOptions)
}