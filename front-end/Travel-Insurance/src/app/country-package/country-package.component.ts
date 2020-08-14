import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DateService } from 'src/app/services/date.service';
import { Date } from '../model/date';
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
  constructor(private  fb:FormBuilder, private dateInject:DateService) { }

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

    // const no = new Date(this.date.controls.startDate.value)
    // let date = new Date();
     const  start_date:string  =  this.date.controls.startDate.value;
     const  end_date:string  =  this.date.controls.endDate.value;
     const date = new Date(start_date, end_date)
   this.dateInject.postDate(date).subscribe(date=>{
       console.log("date Done")
    })

  }
  packageDetail(){
    this.status =true;
  }
}
