import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-user-detail',
  templateUrl: './show-user-detail.component.html',
  styleUrls: ['./show-user-detail.component.css']
})
export class ShowUserDetailComponent implements OnInit {
  users: any;
  dateofusers: string;
  constructor(private activatedroute: ActivatedRoute,
              private userService: UserService) {
  }
  ngOnInit(): void {
    // console.log(history.state);
    this.users = history.state;
    this.dateofusers = this.users.dateOfBirth.getDate()+'/'+ Number(this.users.dateOfBirth.getMonth()+1) +'/' + this.users.dateOfBirth.getFullYear();
    // const alldate=  this.users.dateOfBirth.getDate()+'/'+ dateofusers.getMonth() +'/' + dateofusers.getFullYear();
    
    // console.log('user', this.users);
    // console.log('this.users value', this.users);
    // console.log('this.users.title value', this.users.title);

  }

  onSave(): void{
    this.userService.sendInsuredInfo(this.users).subscribe(users => {
      console.log('USER', users);
    });
  }

}
