import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../services/user.service';
import { UserDetail } from '../model/user-detail';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user: any;

  userDetailForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userDetail: UserService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.userDetailForm = this.formBuilder.group({
      title: ['', Validators.requiredTrue],
      firstName: ['', Validators.requiredTrue],
      lastName: ['', Validators.requiredTrue],
      citizenId: ['', Validators.requiredTrue],
      dateOfBirth: ['', Validators.requiredTrue],
      beneficially: ['', Validators.requiredTrue],
      numberOfTraveller: ['', Validators.requiredTrue]
    });
  }

//   get f(){
//     return this.userDetailForm.controls;
// }
  saveData(): void{
    this.user = this.userDetailForm.getRawValue();
    this.router.navigateByUrl('/showuserdetail', { state: this.user } );
    // this.userDetail.sendInsuredInfo(this.user).subscribe(users => {
    //   console.log('USER', users);
    //   this.router.navigateByUrl('/showuserdetail', { state: this.user } );
    // });
  }

}
