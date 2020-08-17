import { Injectable } from '@angular/core';
import { Package, allPackage } from './../model/package';
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
    // this.http.get<Package[]>("http://localhost:8080//v1/duration")
    return of(allPackage);
  }


}
