import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {User} from '../_models/index';

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    console.log('options :', JSON.stringify(options));
console.log('USER :' + JSON.stringify(user));
    return this.http.post('http://192.168.1.16/api/signup', {
      'user': {
        email: user.email,
     password: user.password,
     password_confirmation: user.password_confirmation,
      user_type: 'vendor'
      }
      /*'user': {
        'email': 'sonam144dd@headerlabs.com',
        'password': 'sona5124899',
        'password_confirmation': 'sona5124899',
        'user_type': 'vendor'
      }*/
    }, options).map((response: Response) => response.json());
  }

  /*update(user: User) {
    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }*/

  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }
}
