import { Injectable } from '@angular/core';
import { Country, mockCountries } from './../model/country';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(){}
  getAllCountry(): Observable <Country[]>{
    return of(mockCountries);
  }
}
