import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
  }

  login(email: string, password: string) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    const options = new RequestOptions({headers: headers});

    // console.log('OPTIONS :' + JSON.stringify(options));
    return this.http.post('http://192.168.1.16/api/login', ({
      user: {
        email: email,
        password: password
      }
    }), options)
      .map((response: Response) => {
        console.log('demo:' + response);
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
