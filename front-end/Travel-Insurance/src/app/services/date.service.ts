import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DateTime } from '../model/dateTime';
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

getDate(): Observable <DateTime>{
    return this.http.get<DateTime>('http://167.99.70.167:8080/api/v1/currentDateAndMaxArrivalDate');
}
  postDate(date) :Observable<DateTime[]>{
  //  const date1 = new Date("20/02/2019","23/03/2019");
  //  const date2 = new Date("20/02/2019","23/03/2019");
  //  const date3 = new Date("20/02/2019","23/03/2019");
  //  return this.httpClient.post<ProductResponse> (`product`,this.makeFormData(product));
    return this.http.post<DateTime[]>("",this.makeFormDate(date))
    // return of([date1,date2,date3]);

  }
  makeFormDate(date :DateTime) : FormData{

      const formData = new FormData();
      formData.append("start_date", date.startDate);
      formData.append("end_date",date.endDate);
      // DateTime fromDate = ToDateTime(date.start_date).Date;
      return formData;
  }
}
