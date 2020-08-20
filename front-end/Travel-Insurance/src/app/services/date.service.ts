import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { DateTime } from '../model/dateTime';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date:Date [] =[];
  // dateBehavior: BehaviorSubject<DateTime>;
  dateTime : DateTime;
  constructor(private http:HttpClient) { 

  }
  ngOnInit(): void {

  }
  sentCalculatePremuim(dateTime:DateTime):void{
    console.log("rhehrehre");
    
      this.dateTime = dateTime;
      // this.dateBehavior = new BehaviorSubject(this.dateTime);
  }


  // getCalculatePremuim():{
  //     this.dateBehavior.next( this.dateTime );
  // }
getDate(): Observable <DateTime>{
    return this.http.get<DateTime>('http://167.99.70.167:8080/api/v1/currentDateAndMaxArrivalDate');
}
  postDate(date:DateTime) :Observable<DateTime>{

    return this.http.post<DateTime>("http://167.99.70.167:8080/api/v1/totalPrice",date)
  }
  makeFormDate(date: DateTime): FormData{

      const formData = new FormData();
      formData.append("start_date", date.departureDate);
      formData.append("end_date",date.arrivalDate);
      return formData;
  }
}
