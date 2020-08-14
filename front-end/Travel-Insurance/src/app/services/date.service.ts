import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Date } from '../model/date';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date:Date [] =[]

  constructor(private http:HttpClient) { 
  }
  ngOnInit(): void {

  }
  postDate(date) :Observable<Date[]>{
  //  const date1 = new Date("20/02/2019","23/03/2019");
  //  const date2 = new Date("20/02/2019","23/03/2019");
  //  const date3 = new Date("20/02/2019","23/03/2019");
  //  return this.httpClient.post<ProductResponse> (`product`,this.makeFormData(product));
    return this.http.post<Date[]>("",this.makeFormDate(date))
    // return of([date1,date2,date3]);

  }
  makeFormDate(date :Date) : FormData{

      const formData = new FormData();
      formData.append("start_date", date.start_date);
      formData.append("end_date",date.end_date);
      // DateTime fromDate = ToDateTime(date.start_date).Date;
      return formData;
  }
}
