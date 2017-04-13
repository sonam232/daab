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
// create user

  create(user: User) {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    console.log('options :', JSON.stringify(options));
console.log('USER :' + JSON.stringify(user));
    return this.http.post('http://daabglobal.com/api/signup', {
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
// update user personal info
  update(user: User) {
   console.log(user);
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer '+localStorage.getItem('access_token'));
    const options = new RequestOptions({headers: headers});
    console.log('options :', JSON.stringify(options));
    console.log('USER :' + JSON.stringify(user));
    return this.http.put('http://daabglobal.com/api/user',
      {
      'user': {
        first_name : user.first_name,
        last_name: user.last_name,
        mobile : user.mobile
      }

    }, options).map((response: Response) => response.json());
  }

  //update user businesss info

  update2 (user: User) {
   console.log(user);
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer '+localStorage.getItem('access_token'));
    const options = new RequestOptions({headers: headers});
    console.log('options :', JSON.stringify(options));
    console.log('USER :' + JSON.stringify(user));
    return this.http.put('http://daabglobal.com/api/business', {
      'business': {
        name : user.name,
        description : user.description,
        website : user.website,
        category_id : user.category_id,
        street : user.street,
        zip : user.zip,
        city: user.city,
        state: user.state
      }
    }, options).map((response: Response) => response.json());
  }
  // payment details


  update0 (user: User) {
    console.log(user);
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    console.log('options :', JSON.stringify(options));
    console.log('USER :' + JSON.stringify(user));
    return this.http.put('http://daabglobal.com/api/payment', {
      'user': {
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
        user_type: 'vendor'
      }
    }, options).map((response: Response) => response.json());
  }


  // change password

  update3 (user: User) {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    console.log('options :', JSON.stringify(options));
    console.log('USER :' + JSON.stringify(user));
    return this.http.put('http://daabglobal.com/api/change_password', {
      'user': {
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
        user_type: 'vendor'
      }
    }, options).map((response: Response) => response.json());
  }


  /*

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
