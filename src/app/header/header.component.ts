import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  is_login: any;

  constructor( private router: Router) {
  }

  ngOnInit() {
    if (this.checkUser()) {
      //console.log('Current user: ' + this.checkUser());
      this.is_login = function () {
        return true;
      };
    } else {
      this.is_login = function () {
        return false;
      };
    };
  }

  checkUser = function () {
    return localStorage.getItem('currentUser');
  };

  logout = function () {
    // remove user from local storage to log user out
    localStorage.clear();
    this.router.navigate(['/home']);
    window.location.reload();
  }
}
