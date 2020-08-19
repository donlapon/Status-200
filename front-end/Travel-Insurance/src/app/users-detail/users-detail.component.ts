import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../services/user.service';
import { UserDetail } from '../model/user-detail';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  userDetailForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private activatedRoute: ActivatedRoute , private userDetail: UserService) { }
  private customerDate: Date;
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        data=>{
          console.log(data.id)
           this.customerDate = data.id ;
          
        }
      )
    
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

  get f(){
    return this.userDetailForm.controls;
}
  saveData(): void{
    const user = new UserDetail(
                                this.f.title.value,
                                this.f.firstName.value,
                                this.f.lastName.value,
                                this.f.citizenId.value,
                                this.f.dateOfBirth.value,
                                this.f.beneficially.value,
                                this.f.numberOfTraveller.value,
                                );
    this.userDetail.postUserDetail(user).subscribe(users => {
      console.log('USER', users);
    });
  }

}
