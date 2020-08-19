import { Injectable } from '@angular/core';
import { Country,CountryResponse  } from './../model/country';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient){}

  getAllCountry(): Observable <Country[]>{

    return this.http.get<Country[]>("http://167.99.70.167:8080/api/v1/country");
    // return of(mockCountries);
  }
}
