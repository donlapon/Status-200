import { Component, OnInit, inject } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-show-user-detail',
  templateUrl: './show-user-detail.component.html',
  styleUrls: ['./show-user-detail.component.css']
})
export class ShowUserDetailComponent implements OnInit {
  users: any;
  constructor(private activatedroute: ActivatedRoute,
              private userService: UserService) {
  }
  ngOnInit(): void {
    // console.log(history.state);
    this.users = history.state;
    console.log('this.users value', this.users);
    console.log('this.users.title value', this.users.title);
    
  }

  onSave(): void{
    this.userService.sendInsuredInfo(this.users).subscribe(users => {
      console.log('USER', users);
    });

  }

}
