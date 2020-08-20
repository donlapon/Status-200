import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  name: string;

  constructor( ) { }

  ngOnInit(): void {
    this.name = history.state;
    console.log('last full name', this.name);
    
  }

}
