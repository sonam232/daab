import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  update2() {
    console.log(this.model);
    this.loading = true;
    //console.log();
    this.userService.update2(this.model)
      .subscribe(
        data => {
          this.alertService.success('business info updated', true);
          this.router.navigate(['/payment']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }


  ngOnInit() {
  }

}






