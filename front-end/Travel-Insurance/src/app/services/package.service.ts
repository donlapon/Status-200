import { Injectable } from '@angular/core';
import { Package } from './../model/package';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DateTime } from '../model/dateTime';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http:HttpClient) { }
  getAllPackage(): Observable <Package[]>{
    // console.log("debug")
    // console.log(allPackage)
  return  this.http.get<Package[]>("http://167.99.70.167:8080/api/v1/package")
    // return of(allPackage);
  }


}
