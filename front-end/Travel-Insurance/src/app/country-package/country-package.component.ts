import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Country } from './../model/country';
import { CountryService } from './../services/country.service';
import { DateService } from './../services/date.service';
import { Date } from './../model/date';

@Component({
  selector: 'app-country-package',
  templateUrl: './country-package.component.html',
  styleUrls: ['./country-package.component.css']
})
export class CountryPackageComponent implements OnInit {
  status: boolean;
  // picker:string = "";
  date: FormGroup;
  // cap : string[] = ["Thai","England","Japan"];
  cap: Country[] = [];
  // dataSource = new MatTableDataSource<Product>();

  pack: string[] =["Ergonomic Metal Tuna","Gorgeous Soft Bacon","Toys"]
  constructor(private  fb: FormBuilder,
              private service: CountryService,
              private dateInject: DateService) { }

  ngOnInit(): void {
    this.date =  this.fb.group({
      startDate : [''],
      endDate : ['']
    });
    this.getAll();
  }
  getAll(): void{
    this.service.getAllCountry().subscribe((data) => {
      // console.log(data)
      this.cap = data;
      // console.log(this.cap)
      return this.cap ;
    });
  }
  get f(){
      return this.date.controls;
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
    this.status = true;
  }
}
