import { Injectable } from '@angular/core';
import { Country,CountryResponse, mockCountries  } from './../model/country';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient){}

  getAllCountry(): Observable <Country[]>{

    // return this.http.get<Country[]>("http://localhost:8080/country");
    return of(mockCountries);
  }
}
