import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Country } from './../model/country';
import { Package, InsurancePackageList, Packagedetail } from './../model/package';
import { CountryService } from './../services/country.service';
import { PackageService } from './../services/package.service';
import { DateService } from './../services/date.service';
import { DateTime } from './../model/dateTime';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-package',
  templateUrl: './country-package.component.html',
  styleUrls: ['./country-package.component.css']

})
export class CountryPackageComponent implements OnInit {
  status: boolean;
  date: FormGroup;
  cap: Country[] = [];
  customerDate: DateTime;
  minDate: Date;
  maxDate: Date;
  dateDetail: any;
  dt: DateTime;
  selectedPackageList: Packagedetail[];
  selectedPackage: InsurancePackageList[];
  pk: Package[] = [];
  packageName: string;
  countryName: string;
  constructor(private fb: FormBuilder,
    private country: CountryService,
    // private dateInject: DateService,
    private packkage: PackageService,
    private datetime: DateService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.date = this.fb.group({
      startDate: ['', Validators.requiredTrue],
      endDate: ['', Validators.requiredTrue]
    })
    this.getAllCountries();
    this.getAllPackage();
    this.getDateTime();
  }
  checkDates(date: FormGroup) {
    if (date.controls.endDate.value < date.controls.startDate.value) {
      // console.log("herhreeh")
      return true
    }
    return null;

  }
  getDate(): void {
    this.minDate = new Date();
    // console.log("test",this.dt.endDate);

    if (this.dt.arrivalDate != null) {
      const stDate = this.dt.arrivalDate.split("-");


      const year = stDate[0];
      const month = stDate[1];
      const day = stDate[2];
      this.minDate = new Date();//currentDate
      this.maxDate = new Date(Number(year)//maximumDate
        , Number(month), Number(day));

    }
  }
  getAllCountries(): void {
    this.country.getAllCountry().subscribe((data) => {
      this.cap = data;

      this.cap.forEach(country => {
        country.status = false;

      });
      // console.log("t",this.cap)
      return this.cap;

    });
  }
  getAllPackage(): void {
    this.packkage.getAllPackage().subscribe((data) => {
      this.pk = data;
      // console.table(data);

      return this.pk;
    });
  }

  getDateTime(): void {
    this.datetime.getDate().subscribe((data) => {
      // console.log("result ", data);
      this.dt = data;
      this.getDate();
    });
  }
  get f() {
    return this.date.controls;
  }
  saveDate() {
    // const departure: Date = this.date.controls.startDate.value;
    // this.currentDateInput = departure;
    const departureDate: string = this.date.controls.startDate.value;
    const arrivalDate: string = this.date.controls.endDate.value;
    console.log('start date', departureDate, 'end date', arrivalDate);
    
    this.customerDate = new DateTime(departureDate, arrivalDate, this.countryName, this.packageName);
// console.log('this.customerDate', this.customerDate);

    this.router.navigateByUrl('/userdetail', { state: this.customerDate });
    console.log('package date', history.state);
    // console.log(arrival)
    // if(departure > arrival){
    // const departureDate = `${departure.getDate}-${departure.getMonth}-${departure.getFullYear}`
    // const arrivalDate = `${arrival.getDate}-${arrival.getMonth}-${arrival.getFullYear}`

    //  console.log("trst",this.customerDate)
    // this.dateInject.sentCalculatePremuim(this.customerDate);
    //     this.dateInject.postDate(this.customerDate).subscribe(date  => {
    //       this.datetime.sentCalculatePremuim(date);
    //       // console.table(date); 
    //       console.log("date Done")
    //       // [routerLink]="['/userdetail']"
    //       // this.router.navigate(['/userdetail']);})

    //   // }
    // })}
  }


  packageDetail(countryCode: string, countryName: string, i: number, currentStatus: boolean) {
    // this.status = false;
    this.pk.forEach(_p => {
      if (currentStatus) {
        this.status = false;
        this.cap[i].status = false;

      } else {
        if (countryCode === _p.countryCode) {

          this.countryName = countryName;

          this.selectedPackage = _p.insurancePackageList;
          this.selectedPackageList = this.selectedPackage[0].package_detail;
          this.packageName = this.selectedPackage[0].package_name;
          this.cap[i].status = true;
          this.status = true;
          // this.cap[i].status = true;
          //   this.status = true;
        }
      }

    }


    );


  }
}
