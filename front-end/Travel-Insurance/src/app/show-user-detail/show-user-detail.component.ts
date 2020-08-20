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
  constructor(private activatedroute: ActivatedRoute,
              private userService: UserService) {
  }
  ngOnInit(): void {
    // console.log(history.state);
    this.users = history.state;
    const dateofusers =    this.users.dateOfBirth
    // const alldate=  dateofusers.getDate()+'/'+ dateofusers.getMonth() +'/' + dateofusers.getFullYear();
    this.users.dateOfBirth = dateofusers.getDate()+'/'+ dateofusers.getMonth() +'/' + dateofusers.getFullYear();
    // console.log("gre",alldate);
    
    console.log('user', this.users);
    // console.log('this.users value', this.users);
    // console.log('this.users.title value', this.users.title);

  }

  onSave(): void{
    this.userService.sendInsuredInfo(this.users).subscribe(users => {
      console.log('USER', users);
    });
  }

}
