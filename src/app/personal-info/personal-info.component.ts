import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  update() {
    // console.log(this.model);
    this.loading = true;
    this.userService.update(this.model)
      .subscribe(
        data => {
          this.alertService.success('personalinfo updated', true);
          this.router.navigate(['/business']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  ngOnInit() {
  }

}
