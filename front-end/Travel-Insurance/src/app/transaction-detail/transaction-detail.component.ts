import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  users: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.users = history.state;
    console.log('this.users last', this.users);

  }

}
