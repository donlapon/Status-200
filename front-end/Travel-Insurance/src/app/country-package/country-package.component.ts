import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-country-package',
  templateUrl: './country-package.component.html',
  styleUrls: ['./country-package.component.css']
})
export class CountryPackageComponent implements OnInit {
  status: Boolean;
  // picker:string = "";
  date : FormGroup;
  cap : string[] = ["Thai","England","Japan"];
  pack : string[] =["Ergonomic Metal Tuna","Gorgeous Soft Bacon","Toys"]
  constructor(private  fb:FormBuilder) { }

  ngOnInit(): void {
    this.date =  this.fb.group({
      startDate : [''],
      endDate : ['']
    })
  }
  get f(){
      return this.date.controls
  }
  saveDate(){
    const no = new Date(this.date.controls.startDate.value)

     const  da  =  this.date.controls.startDate.value;


     console.log(da)
  }
  packageDetail(){
    this.status =true;
  }
}
