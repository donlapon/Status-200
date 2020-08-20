import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../services/user.service';
import { UserDetail } from '../model/user-detail';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { DateService } from './../services/date.service';
import { DateTime } from '../model/dateTime';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user: any;
  dateValue: any;
  dateDetailValue: any;
  userDetailForm: FormGroup;
  customerDate: DateTime;
  userFullName: any;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private userDetail: UserService,
              private router: Router,
              private dateService: DateService
              ) { }

  // constructor(private formBuilder: FormBuilder, 
  //             private activatedRoute: ActivatedRoute, 
  //             private userDetail: UserService) { }
  // private customerDate: Date;
  ngOnInit(): void {
      // this.activatedRoute.params.subscribe(
      //   data => {
      //     console.log(data.id)
      //     this.customerDate = data.id ;
      //   }
      // );

      this.userDetailForm = this.formBuilder.group({
      title: ['', Validators.requiredTrue],
      firstName: ['', Validators.requiredTrue],
      lastName: ['', Validators.requiredTrue],
      citizenId: ['', Validators.requiredTrue],
      dateOfBirth: ['', Validators.requiredTrue],
      beneficially: ['', Validators.requiredTrue],
      numberOfTraveller: ['', Validators.requiredTrue]
    });

      this.callDateDetail();
      // this.setName();
  }

  callDateDetail(): void{
    this.dateValue = history.state;

    this.customerDate = new DateTime(this.dateValue.departureDate, this.dateValue.arrivalDate);

    this.dateService.postDate(this.customerDate).subscribe(date  => {
      // console.log(date);
      this.dateDetailValue = date;
      console.log(this.dateDetailValue.totalPrice);
      // this.saveData();
    });

  }
  saveData(): void{
    console.log(this.dateDetailValue);

    this.user = this.userDetailForm.getRawValue();
    this.router.navigateByUrl('/showuserdetail', { state: this.user } );

  }

}
