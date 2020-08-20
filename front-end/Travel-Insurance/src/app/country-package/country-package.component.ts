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
  // cardStatus: boolean;
  // count: Number;
  date: FormGroup;
  cap: Country[] = [];
  // ht: Object;
  customerDate: DateTime;
  // dataSource = new MatTableDataSource<Product>();
  minDate: Date;
  maxDate: Date;
  dateDetail: any;
  dt: DateTime;
  selectedPackageList: Packagedetail[];
  selectedPackage: InsurancePackageList[];
  pk: Package[] = [];
  // pack: string[] = ["Ergonomic Metal Tuna", "Gorgeous Soft Bacon", "Toys"]
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
    });
    // console.log("de")
    this.getAllCountries();
    this.getAllPackage();
    this.getDateTime();
  }

  getDate(): void {
    // const currentYear = new Date().getFullYear;
    this.minDate = new Date();
    // console.log("test",this.dt.endDate);

    if (this.dt.arrivalDate != null){
    const stDate = this.dt.arrivalDate.split("-");
    console.log(stDate)
    const year = stDate[0];
    const month = stDate[1];
    const day = stDate[2];
    this.minDate = new Date();
    this.maxDate = new Date(Number(year)
      , Number(month) - 1, Number(day));
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
      console.table(data);

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
  saveDate(): void{
    const departureDate: string = this.date.controls.startDate.value;
    const arrivalDate: string = this.date.controls.endDate.value;
    this.customerDate = new DateTime(departureDate, arrivalDate);
    // console.log("trst",this.customerDate)

    // this.dateInject.postDate(this.customerDate).subscribe(date  => {
    //   this.dateDetail = date;
    //   console.log('dateDetail package-country', this.dateDetail);

    //   this.router.navigateByUrl('/userdetail', { state: this.dateDetail } );
    //   console.log('package date', history.state);
    // });

    this.router.navigateByUrl('/userdetail', { state: this.customerDate } );
    console.log('package date', history.state);
  }

  packageDetail(countryCode: string) {
    console.log(this.pk);
    this.status = false;
    this.pk.forEach(_p => {
 

      if (countryCode === _p.countryCode) {

        this.status = true;
        this.selectedPackage = _p.insurancePackageList;
        this.selectedPackageList =  this.selectedPackage[0].package_detail;
        console.log(this.selectedPackageList)
      }

    });
    this.status = true;


  }
}
