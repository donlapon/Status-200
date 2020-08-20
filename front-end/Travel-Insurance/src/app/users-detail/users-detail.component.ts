import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../services/user.service';
import { UserDetail } from '../model/user-detail';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DateService } from '../services/date.service';
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
  // customerDate: DateTime;
  userFullName: any;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private userDetail: UserService,
              private router: Router,
              private dateService: DateService
              ) { }

  private customerDate: DateTime;
  ngOnInit(): void {

    this.customerDate  =  this.dateService.dateTime;
    this.userDetailForm = this.formBuilder.group({
      beneficiaryName: ['', Validators.requiredTrue],
      dateOfBirth: ['', Validators.requiredTrue],
      email: ['', Validators.requiredTrue],
      firstName: ['', Validators.requiredTrue],
      lastName: ['', Validators.requiredTrue],
      idNumber: ['', Validators.requiredTrue],
      phoneNumber: ['', Validators.requiredTrue],
      title: ['', Validators.requiredTrue]
    });
    // console.log('Form', this.userDetailForm);
    
    this.callDateDetail();
  }

  get f(){
    return this.userDetailForm.controls;
}

  callDateDetail(): void{
    this.dateValue = history.state;
// console.log('this.dateValue', this.dateValue);

    this.customerDate = new DateTime(this.dateValue.departureDate, this.dateValue.arrivalDate, this.dateValue.countryName, this.dateValue.packageName);
    // console.log('custom date', this.customerDate);
    
    this.dateService.postDate(this.customerDate).subscribe(date  => {
      this.dateDetailValue = date.arrivalDate
      // console.log('date', date);
      this.dateDetailValue = date;
      // console.log('dateDetailValue', this.dateDetailValue);
      // this.saveData();
    });

  }
  saveData(): void{
    // console.log(this.dateDetailValue);

    this.user = this.userDetailForm.getRawValue();
    this.user.dateDetailValue = this.dateDetailValue;
    
    this.user.countryName = this.customerDate.countryName;
    this.user.packageName = this.customerDate.packageName;
    
    console.log('user to go', this.user);

    this.router.navigateByUrl('/showuserdetail', { state: this.user } );

  }

  }
