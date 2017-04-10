import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  is_login: any;

  constructor() {
  }

  ngOnInit() {
    if (this.checkUser()) {
      console.log('Current user: ' + this.checkUser());
      this.is_login = function () {
        return true;
      };
    } else {
      this.is_login = function () {
        return false;
      };
    }
    ;
  }

  checkUser = function () {
    return localStorage.getItem('currentUser');
  };
}
