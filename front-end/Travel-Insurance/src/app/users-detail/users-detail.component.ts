import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  userDetailForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userDetailForm = this.formBuilder.group({
      tiltle: [''],
      firstName: [''],
      lastName: [''],
      citizenId: [''],
      dateOfBirth: [''],
      beneficially: [''],
      number: ['']
    });
  }

  saveData(): void{

  }

}
