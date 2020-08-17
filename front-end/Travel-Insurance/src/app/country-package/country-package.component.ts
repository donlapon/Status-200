import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Country } from './../model/country';
import { Package } from './../model/package';
import { CountryService } from './../services/country.service';
import { PackageService } from './../services/package.service';
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

  pk: Package[] = [];
  pack: string[] =["Ergonomic Metal Tuna","Gorgeous Soft Bacon","Toys"]
  constructor(private  fb: FormBuilder,
              private country: CountryService,
              private dateInject: DateService,
              private packkage: PackageService) { }

  ngOnInit(): void {
    this.date =  this.fb.group({
      startDate : [''],
      endDate : ['']
    });
    this.getAllCountries();
    this. getAllPackage();
  }
  getAllCountries(): void{
    this.country.getAllCountry().subscribe((data) => {
      return this.cap = data;
    });
  }
  getAllPackage(): void{
    this.packkage.getAllPackage().subscribe((data) =>{
      this.pk = data;
      console.log(this.pk);
      return this.pk ;
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
