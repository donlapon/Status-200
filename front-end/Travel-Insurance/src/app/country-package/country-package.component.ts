import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Country } from './../model/country';
import { Package } from './../model/package';
import { CountryService } from './../services/country.service';
import { PackageService } from './../services/package.service';
import { DateService } from './../services/date.service';
import { DateTime } from './../model/dateTime';

@Component({
  selector: 'app-country-package',
  templateUrl: './country-package.component.html',
  styleUrls: ['./country-package.component.css']
})
export class CountryPackageComponent implements OnInit {
  status: boolean;
  cardStatus:boolean;
  count: Number;
  date: FormGroup;
  cap: Country[] = [];
  // dataSource = new MatTableDataSource<Product>();
  minDate : Date;
  maxDate : Date;
  dt: DateTime;
  pk: Package[] = [];
  pack: string[] =["Ergonomic Metal Tuna","Gorgeous Soft Bacon","Toys"]
  constructor(private  fb: FormBuilder,
              private country: CountryService,
              private dateInject: DateService,
              private packkage: PackageService,
              private datetime:  DateService
              ) {
           
               }

  ngOnInit(): void {
    this.date =  this.fb.group({
      startDate : ['',Validators.requiredTrue],
      endDate : ['',Validators.requiredTrue ]
    });
    // console.log("de")
    this.getAllCountries();
    this. getAllPackage();
    this.getDateTime();
  }

  getDate( ) :void{
    // const currentYear = new Date().getFullYear;
    this.minDate = new Date();
   const  stDate =   this.dt.endDate.split("-");

   const year = stDate[0];
   const  month = stDate[1];
    const day = stDate[2];
    this.minDate = new Date();
    this.maxDate = new Date( Number(year)
    , Number(month)-1, Number(day));
    console.log(this.maxDate)
  }
  getAllCountries(): void{
    this.country.getAllCountry().subscribe((data) => {
      this.cap = data;

    this.cap.forEach(country => {
          country.status= false;

      });
      // console.log("t",this.cap)
      return this.cap;
      
    });
  }
  getAllPackage(): void{
    this.packkage.getAllPackage().subscribe((data) =>{
      
      this.pk = data;

      return this.pk ;
    });
  }
  
  getDateTime(): void{
    this.datetime.getDate().subscribe((data)=>{
      this.dt = data;
      this.getDate();

    })
  }
  get f(){
      return this.date.controls;
  }
  saveDate(){
     const  start_date:string  =  this.date.controls.startDate.value;
     const  end_date:string  =  this.date.controls.endDate.value;
     const date = new DateTime(start_date, end_date);
   this.dateInject.postDate(date).subscribe(date=>{
       console.log("date Done")
    })
    console.log(this.date.controls.startDate.invalid);
  }
  packageDetail(countryCode:string){
    
    this.cap.forEach(country => {
      // if(!country.status ){
      
      if(countryCode == country.countryCode){
        if(country.status){
          country.status = false;

        }else{
          country.status =true;
        }


      }
    
      // this.pk.forEach(element => {
      //   console.log(          element[2].insurancePackageList
      //     )
      //     // element[2].insurancePackageList[0]
      // });
      console.log('package', this.pk[2].insurancePackageList);
      
    });

 }
}
