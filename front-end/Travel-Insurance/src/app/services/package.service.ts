import { Injectable } from '@angular/core';
import { Package, allPackage } from './../model/package';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor() { }
  getAllPackage(): Observable <Package[]>{
    return of(allPackage);
  }
}
