import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

// import { Location } from '@angular/common';
@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
  users: any;

  constructor(private userService: UserService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("hs", history.state);
    this.users = history.state;
    
    console.log('this.users term condition', this.users);
    // this.router.navigateByUrl('/transactiondetail', { state: this.users } );
  }
  back(){
    // this.location.back();
    // console.log('debug');
    
  }
  onSave(): void{
    this.router.navigateByUrl('/transactiondetail', { state: this.users } );

  }
}
