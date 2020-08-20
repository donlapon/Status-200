import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-user-detail',
  templateUrl: './show-user-detail.component.html',
  styleUrls: ['./show-user-detail.component.css']
})
export class ShowUserDetailComponent implements OnInit {
  users: any;
  dateofusers: string;
  constructor(private activatedroute: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
  }
  ngOnInit(): void {
    console.log(history.state);
    this.users = history.state;
    this.dateofusers = this.users.dateOfBirth.getDate()+'/'+ Number(this.users.dateOfBirth.getMonth()+1) +'/' + this.users.dateOfBirth.getFullYear();
    // const alldate=  this.users.dateOfBirth.getDate()+'/'+ dateofusers.getMonth() +'/' + dateofusers.getFullYear();

    // console.log('user', this.users);
    // console.log('this.users value', this.users);
    // console.log('this.users.title value', this.users.title);
    // console.log('show user detail page', this.users);

    // this.router.navigateByUrl('/termsandconditions', { state: this.users } );

  }

  onSave(): void{
    this.userService.sendInsuredInfo(this.users).subscribe(users => {
      this.router.navigateByUrl('/termsandconditions', { state: this.users } );
      // console.log('USER', users);
    });
  }

}
