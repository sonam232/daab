import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  public static is_logged_in = false;

  constructor(private http: Http) {
  }

  login(email: string, password: string) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    console.log('OPTIONS :' + JSON.stringify(options));
    return this.http.post('http://daabglobal.com/api/login', ({
      user: {
        email: email,
        password: password
      }
    }), options)
      .map((response: Response) => {
        console.log('demo:' + JSON.stringify(response.json()));
        // login successful if there's a jwt token in the response
        const user = response.json();
        localStorage.setItem('currentUser', JSON.stringify(response.json().user));
        localStorage.setItem('access_token', response.json().access_token);
        console.log('USER: ' + JSON.parse(localStorage.getItem('currentUser')));
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
  }
}
